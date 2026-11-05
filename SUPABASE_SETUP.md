# Supabase setup for reviews

The site remains static on GitHub Pages. Supabase provides the shared review database, private photo storage, and admin authentication. Until configured, text reviews continue to use this browser's local storage and photo inputs stay disabled.

## 1. Create a project

Create a Supabase project and open **SQL Editor**. Run the contents of `supabase-setup.sql`.

The script creates the reviews table, role table, reaction-vote table and function, row-level security policies, and private `review-photos` bucket. Re-run the complete script after updating the site so the latest storage policies are applied; it also replaces the previous unlimited reaction function. Each browser ID can add each reaction type once per review. Review text appears immediately, but uploaded photos stay private until an administrator approves them in the review card. An administrator can also withdraw approval later; previously issued preview links expire after five minutes. Before enabling uploads, get approval from the school and the people responsible for student photos. Do not upload sensitive or identifying images without permission.

If an administrator sees that a photo preview cannot be loaded, re-run `supabase-setup.sql` and confirm that the administrator's user UUID is present in `public.review_admins`. Unapproved photos are only available to that signed-in administrator; visitors can see them only after approval.

## 2. Create the admin account

In **Authentication → Users**, create an account for the school administrator. Disable public sign-ups afterward if they are not needed.

Copy that user's UUID and run this in the SQL Editor:

```sql
insert into public.review_admins (user_id)
values ('AUTH_USER_UUID');
```

Only users listed in `review_admins` can answer or delete reviews. The website admin button accepts this account's email and password when cloud mode is configured.

## 3. Configure the website

In **Project Settings → API**, copy the Project URL and the public `anon`/publishable key into `supabase-config.js`:

```js
window.MISSION_SUPABASE_CONFIG = {
  url: "https://YOUR_PROJECT.supabase.co",
  anonKey: "YOUR_PUBLIC_PUBLISHABLE_KEY"
};
```

The publishable/anon key is intended for browser use and is protected by the SQL policies. Never put the `service_role` key in this file or any website code.

Commit and publish `supabase-config.js` with the site. Once configured, reviews, reactions, and image attachments are shared between devices and refresh in real time. The reaction limit uses a random browser ID, not an IP address; clearing browser storage creates a new ID. Photos accept JPEG, PNG, or WebP up to 5 MB. Review photos and admin reply photos remain private until separately approved.

## Privacy

This setup does not collect or display reviewers' IP addresses. Review names, text, ratings, and reactions are public. Attached photos are private until approved by an administrator, then visible to site visitors. Agree on a school privacy notice and photo approval process before enabling uploads.
