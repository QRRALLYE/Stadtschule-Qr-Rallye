create extension if not exists pgcrypto;

create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 40),
  text text not null check (char_length(text) between 1 and 220),
  rating smallint not null check (rating between 1 and 5),
  photo_path text,
  reply text not null default '' check (char_length(reply) <= 220),
  reply_photo_path text,
  reactions jsonb not null default '{"love":0,"great":0,"fire":0}'::jsonb,
  created_at timestamptz not null default now()
);

alter table public.reviews add column if not exists photo_approved boolean not null default false;
alter table public.reviews add column if not exists reply_photo_approved boolean not null default false;

create table if not exists public.review_admins (
  user_id uuid primary key references auth.users(id) on delete cascade
);

alter table public.reviews enable row level security;
alter table public.review_admins enable row level security;

create or replace function public.is_review_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.review_admins where user_id = auth.uid()
  );
$$;

revoke all on function public.is_review_admin() from public;
grant execute on function public.is_review_admin() to anon, authenticated;

revoke all on public.reviews from anon, authenticated;
grant select on public.reviews to anon, authenticated;
grant insert (name, text, rating, photo_path) on public.reviews to anon, authenticated;
grant update (reply, reply_photo_path, photo_approved, reply_photo_approved) on public.reviews to authenticated;
grant delete on public.reviews to authenticated;
grant select on public.review_admins to authenticated;

 drop policy if exists "Reviews are public" on public.reviews;
create policy "Reviews are public"
  on public.reviews for select to anon, authenticated using (true);

drop policy if exists "Visitors can submit reviews" on public.reviews;
create policy "Visitors can submit reviews"
  on public.reviews for insert to anon, authenticated
  with check (
    char_length(trim(name)) between 1 and 40
    and char_length(trim(text)) between 1 and 220
    and rating between 1 and 5
    and reply = ''
    and (photo_path is null or photo_path like 'reviews/%')
    and reply_photo_path is null
    and not photo_approved
    and not reply_photo_approved
    and reactions = '{"love":0,"great":0,"fire":0}'::jsonb
  );

drop policy if exists "Admins can answer reviews" on public.reviews;
create policy "Admins can answer reviews"
  on public.reviews for update to authenticated
  using (public.is_review_admin()) with check (public.is_review_admin());

drop policy if exists "Admins can delete reviews" on public.reviews;
create policy "Admins can delete reviews"
  on public.reviews for delete to authenticated
  using (public.is_review_admin());

drop policy if exists "Admins can read their own role" on public.review_admins;
create policy "Admins can read their own role"
  on public.review_admins for select to authenticated
  using (user_id = auth.uid());

create or replace function public.add_review_reaction(p_review_id uuid, p_reaction text)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  current_count integer;
begin
  if p_reaction not in ('love', 'great', 'fire') then
    raise exception 'Invalid reaction';
  end if;

  select coalesce((reactions ->> p_reaction)::integer, 0)
    into current_count
    from public.reviews
    where id = p_review_id;

  if not found then
    raise exception 'Review not found';
  end if;

  update public.reviews
    set reactions = jsonb_set(reactions, array[p_reaction], to_jsonb(current_count + 1), true)
    where id = p_review_id;
end;
$$;

revoke all on function public.add_review_reaction(uuid, text) from public;
grant execute on function public.add_review_reaction(uuid, text) to anon, authenticated;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('review-photos', 'review-photos', false, 5242880, array['image/jpeg', 'image/png', 'image/webp'])
on conflict (id) do update set public = excluded.public, file_size_limit = excluded.file_size_limit, allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Review photos are public" on storage.objects;
drop policy if exists "Approved review photos and admin previews" on storage.objects;
create policy "Approved review photos and admin previews"
  on storage.objects for select to anon, authenticated
  using (
    bucket_id = 'review-photos'
    and (
      exists (
        select 1 from public.reviews r
        where r.photo_path = name
          and (r.photo_approved or public.is_review_admin())
      )
      or exists (
        select 1 from public.reviews r
        where r.reply_photo_path = name
          and (r.reply_photo_approved or public.is_review_admin())
      )
    )
  );

drop policy if exists "Visitors upload review photos and admins upload replies" on storage.objects;
create policy "Visitors upload review photos and admins upload replies"
  on storage.objects for insert to anon, authenticated
  with check (
    bucket_id = 'review-photos'
    and storage.extension(name) in ('jpg', 'jpeg', 'png', 'webp')
    and (
      storage.foldername(name)[1] = 'reviews'
      or (storage.foldername(name)[1] = 'replies' and public.is_review_admin())
    )
  );

do $$
begin
  alter publication supabase_realtime add table public.reviews;
exception
  when duplicate_object then null;
end;
$$;

-- After creating the admin user in Supabase Authentication, grant the role:
-- insert into public.review_admins (user_id) values ('AUTH_USER_UUID');
