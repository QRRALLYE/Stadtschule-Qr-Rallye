# MISSION STADTSCHULE 🎮

Готовый статический сайт для школьной QR-рallye.

## Структура
- `index.html` — стартовая страница
- `station.html?station=1` … `station.html?station=7` — станции
- `final.html` — финальный код
- `script.js` — задания, ответы и буквы
- `style.css` — дизайн
- `images/` — 7 фотографий из вашего архива

Главная страница содержит ссылки на все семь станций и показывает сохранённый прогресс. Ссылки на главную страницу и список станций доступны также из каждой миссии.
На странице станции подсказка открывается по кнопке. На главной странице можно сбросить сохранённый прогресс, чтобы начать заново.

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
1. Загрузите все файлы проекта и папку `images` в репозиторий.
2. Откройте **Settings → Pages**.
3. В разделе Source выберите **Deploy from a branch**.
4. Выберите ветку `main` и папку `/ (root)`, затем сохраните.
5. После публикации сайт будет доступен по адресу:
   `https://qrrallye.github.io/Stadtschule-Qr-Rallye/`

Если ссылка пока показывает ошибку 404, включите GitHub Pages в настройках репозитория и дождитесь завершения публикации.

## QR-коды
После публикации добавьте к адресу сайта `station.html?station=N`, где `N` — номер станции от 1 до 7. Например:
- `https://qrrallye.github.io/Stadtschule-Qr-Rallye/station.html?station=1`
- `https://qrrallye.github.io/Stadtschule-Qr-Rallye/station.html?station=2`
- `https://qrrallye.github.io/Stadtschule-Qr-Rallye/station.html?station=3`
- `https://qrrallye.github.io/Stadtschule-Qr-Rallye/station.html?station=4`
- `https://qrrallye.github.io/Stadtschule-Qr-Rallye/station.html?station=5`
- `https://qrrallye.github.io/Stadtschule-Qr-Rallye/station.html?station=6`
- `https://qrrallye.github.io/Stadtschule-Qr-Rallye/station.html?station=7`

Каждый URL нужно превратить в QR-код и распечатать у соответствующей станции.

## Как заменить задания
Все задания находятся в `script.js`, внутри объекта `stations`.
Поля `title`, `place`, `question`, `hint` и `answers` содержат переводы `de`, `en`, `ar` и `ru`. При изменении задания обновляйте все четыре языка, включая допустимые ответы. Поле `image` указывает на фото станции в папке `images/`.

## Язык и порядок фотографий
На сайте можно выбрать Deutsch, English, العربية или Русский. Выбор языка сохраняется на устройстве. Фото хранятся только в `images/` и привязаны к станциям так:
1. `images/station1.jpg` — дверь учительской и надпись STAFF ROOM
2. `images/station2.jpg` — вывеска Sekretariat
3. `images/station3.jpg` — указатель Aula / Mensa
4. `images/station4.jpg` — дверь моечной с номером N.E35
5. `images/station5.jpg` — плакат школьного подкаста
6. `images/station6.jpg` — огнетушитель в коридоре
7. `images/station7.jpg` — спортивная площадка за окнами

## Как добавить настоящее видео
В `final.html` замените блок `.video-frame` на ваш `<video controls>` или iframe YouTube/школьного видеохостинга.

Важно: сайт использует `localStorage`, поэтому прогресс хранится на устройстве участника. Если участник сменит телефон/браузер, прогресс начнётся заново. Финал открывается только после прохождения всех семи станций.
