# Индексация сайта в Google и Яндекс

## 1. Убедись что сайт доступен

Открой в браузере `https://promservis33.ru` — сайт должен открываться без ошибок.

---

## 2. Проверь robots.txt и sitemap.xml

Открой в браузере:
- `https://promservis33.ru/robots.txt`
- `https://promservis33.ru/sitemap.xml`

Оба файла появляются автоматически после `npm run deploy`.

---

## 3. Google Search Console

### Регистрация и подтверждение

1. Зайди на https://search.google.com/search-console
2. **Добавить ресурс** → **URL-префикс** → введи `https://promservis33.ru`
3. Способ подтверждения: **HTML-тег**
4. Скопируй тег и вставь в `src/index.html` внутри `<head>`:
   ```html
   <meta name="google-site-verification" content="XXXXXXX" />
   ```
5. Выполни `npm run deploy`
6. Нажми **Подтвердить** в Search Console

### Отправка sitemap

1. Левое меню → **Sitemap**
2. Введи `sitemap.xml` → **Отправить**

### Ускоренная индексация

**URL-инспекция** → введи `https://promservis33.ru` → **Запросить индексирование**

---

## 4. Яндекс Вебмастер

### Регистрация и подтверждение

1. Зайди на https://webmaster.yandex.ru
2. Нажми **+** → введи `https://promservis33.ru`
3. Способ подтверждения: **HTML-тег**
4. Скопируй тег и вставь в `src/index.html` рядом с тегом Google:
   ```html
   <meta name="yandex-verification" content="XXXXXXX" />
   ```
5. Выполни `npm run deploy`
6. Нажми **Проверить** в Вебмастере

### Отправка sitemap

1. **Индексирование** → **Файлы Sitemap**
2. Введи `https://promservis33.ru/sitemap.xml` → **Добавить**

### Ускоренная индексация

**Индексирование** → **Переобход страниц** → добавь главную страницу

---

## 5. Пример итогового `<head>` в index.html

```html
<head>
  <meta name="google-site-verification" content="ВАШ_КОД_GOOGLE" />
  <meta name="yandex-verification" content="ВАШ_КОД_ЯНДЕКС" />
  ...
</head>
```

---

## Сроки индексации

| Поисковик | Первое появление в поиске |
|-----------|--------------------------|
| Google    | 1–2 недели               |
| Яндекс    | 3–7 дней                 |

---

## Деплой

```bash
npm run deploy   # сборка + sitemap/robots + заливка на сервер
npm run build    # только сборка без деплоя
```
