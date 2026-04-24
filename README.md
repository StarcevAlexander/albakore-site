# AlbakoreSite — promservis33.ru

Angular 21 SPA. Хостинг: reg.ru (ISPmanager, тариф Host-0, пользователь u3475417).

---

## Локальная разработка

```bash
npm install
ng serve
```

Открыть `http://localhost:4200/`

---

## Сборка

```bash
npm run build
```

Артефакты попадают в `dist/albakore-site/browser/`. Именно **содержимое этой папки** заливается на сервер.

---

## Деплой на reg.ru (ручной)

### 1. Собрать проект

```bash
npm run build
```

### 2. Открыть файловый менеджер ISPmanager

Панель управления: `https://server188.hosting.reg.ru:1500/`
Логин: `u3475417`

Перейти: **Файловый менеджер → `www/promservis33.ru/`**

### 3. Загрузить файлы

Загрузить **всё содержимое** `dist/albakore-site/browser/` в корень `/www/promservis33.ru/` на сервере.

Важно: загружать содержимое папки `browser/`, а не саму папку целиком.

Структура на сервере должна быть:
```
www/promservis33.ru/
├── index.html
├── .htaccess
├── main-XXXXXX.js
├── styles-XXXXXX.css
├── images/
├── fonts/
├── docs/
└── ...
```

### 4. Проверить .htaccess

Файл `.htaccess` входит в сборку автоматически (лежит в `public/.htaccess`).
Он обеспечивает корректную работу Angular-роутинга — при обновлении страниц вида `/catalog/mobi-120` сервер не возвращает 404, а отдаёт `index.html`.

Содержимое файла:
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

---

## HTTPS-редирект

**Не добавлять HTTP→HTTPS редирект в `.htaccess`** — на reg.ru SSL завершается на прокси, Apache всегда видит запросы как HTTP, и любой `RewriteRule` на основе `%{HTTPS}` или `%{HTTP:X-Forwarded-Proto}` создаёт бесконечную петлю.

HTTP→HTTPS редирект настраивается через ISPmanager:
**Сайты → promservis33.ru → Принудительный HTTPS** (чекбокс в настройках SSL).

---

## Решённые проблемы

### Сайт показывал «Сайт размещен некорректно»

Файлы были загружены в неправильную директорию или директория была пустая.
Решение: загрузить содержимое `dist/albakore-site/browser/` в `/www/promservis33.ru/`.

### При обновлении страниц возникала ошибка 404

Отсутствовал `.htaccess` с правилом SPA-роутинга.
Решение: техподдержка reg.ru добавила `.htaccess` вручную. Теперь файл входит в сборку автоматически.

### Изображения не загружались — ERR_TOO_MANY_REDIRECTS

Причина: в `.htaccess` был добавлен HTTP→HTTPS редирект (`R=301`), который закешировался браузером и создал петлю.
Решение:
1. Убрать редирект из `.htaccess`
2. Очистить кеш браузера / проверить в режиме инкогнито
3. HTTP→HTTPS настраивать только через ISPmanager, не через `.htaccess`
