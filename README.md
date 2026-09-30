# MISSION STADTSCHULE 🎮

Готовый статический сайт для школьной QR-рallye.

## Структура
- `index.html` — стартовая страница
- `station.html?station=1` … `station.html?station=7` — станции
- `final.html` — финальный код
- `script.js` — задания, ответы и буквы
- `style.css` — дизайн
- `images/` — 7 фотографий из вашего архива

## Буквы
1. S
2. T
3. A
4. T
5. I
6. O
7. N

Финальное слово: **STATION**

## Как загрузить на GitHub Pages
1. Войдите на GitHub и создайте новый репозиторий, например `mission-stadtschule`.
2. Загрузите в репозиторий все файлы и папку `images`.
3. Откройте **Settings → Pages**.
4. В разделе Source выберите **Deploy from a branch**.
5. Выберите ветку `main` и папку `/ (root)`.
6. Сохраните. GitHub выдаст ссылку вида:
   `https://ВАШ-USERNAME.github.io/mission-stadtschule/`

## QR-коды
После публикации используйте URL:
- `https://ВАШ-USERNAME.github.io/mission-stadtschule/station.html?station=1`
- `...station.html?station=2`
- ...
- `...station.html?station=7`

Каждый URL нужно превратить в QR-код и распечатать у соответствующей станции.

## Как заменить задания
Все задания находятся в `script.js`, внутри объекта `stations`.
Можно изменить:
- `question` — текст задания
- `answers` — допустимые ответы
- `hint` — подсказку
- `letter` — букву станции
- `image` — фотографию

## Как добавить настоящее видео
В `final.html` замените блок `.video-frame` на ваш `<video controls>` или iframe YouTube/школьного видеохостинга.

Важно: сайт использует `localStorage`, поэтому прогресс хранится на устройстве участника. Если участник сменит телефон/браузер, прогресс начнётся заново.
