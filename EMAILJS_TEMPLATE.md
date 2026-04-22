# EmailJS — Шаблон письма

## Настройки шаблона

| Поле          | Значение                          |
|---------------|-----------------------------------|
| **Subject**   | Новая заявка с сайта rubmaster.ru |
| **From Name** | РубМастер — сайт                 |
| **Reply To**  | `{{reply_to}}`                   |

---

## HTML-шаблон (вставить в поле «Content» → HTML Editor)

```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Новая заявка</title>
  <style>
    @media only screen and (max-width: 600px) {
      .email-outer  { padding: 16px 0 !important; }
      .email-wrap   { padding: 0 12px !important; }
      .email-header { padding: 24px 20px !important; }
      .email-header h1 { font-size: 20px !important; }
      .email-body   { padding: 24px 20px !important; }
      .email-footer { padding: 16px 20px 24px !important; }
      .cta-btn      { padding: 12px 20px !important; font-size: 14px !important; width: 100% !important; box-sizing: border-box !important; text-align: center !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background:#f4f6f8;font-family:'Segoe UI',Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" class="email-outer" style="background:#f4f6f8;padding:40px 0;">
    <tr>
      <td align="center" class="email-wrap" style="padding:0 16px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

          <!-- HEADER -->
          <tr>
            <td class="email-header" style="background:#C1171D;padding:32px 40px;text-align:center;">
              <p style="margin:0;font-size:13px;color:rgba(255,255,255,0.7);letter-spacing:2px;text-transform:uppercase;">РубМастер · ООО «Промсервис»</p>
              <h1 style="margin:8px 0 0;font-size:24px;font-weight:700;color:#ffffff;">Новая заявка с сайта</h1>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td class="email-body" style="padding:36px 40px;">

              <p style="margin:0 0 24px;font-size:15px;color:#555;line-height:1.6;">
                Поступила новая заявка на консультацию. Свяжитесь с клиентом в ближайшее время.
              </p>

              <!-- DATA BLOCK -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f9fb;border-radius:12px;overflow:hidden;border:1px solid #e8eaed;">
                <tr>
                  <td style="padding:16px 20px;border-bottom:1px solid #e8eaed;">
                    <p style="margin:0;font-size:11px;color:#999;text-transform:uppercase;letter-spacing:1px;">Имя клиента</p>
                    <p style="margin:4px 0 0;font-size:17px;font-weight:600;color:#1a1a2e;">{{name}}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:16px 20px;">
                    <p style="margin:0;font-size:11px;color:#999;text-transform:uppercase;letter-spacing:1px;">Номер телефона</p>
                    <p style="margin:4px 0 0;font-size:17px;font-weight:600;color:#C1171D;">
                      <a href="tel:{{phone}}" style="color:#C1171D;text-decoration:none;">{{phone}}</a>
                    </p>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
                <tr>
                  <td align="center">
                    <a href="tel:{{phone}}"
                       class="cta-btn"
                       style="display:inline-block;background:#C1171D;color:#ffffff;font-size:15px;font-weight:600;text-decoration:none;padding:14px 36px;border-radius:10px;letter-spacing:0.3px;">
                      Позвонить клиенту
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td class="email-footer" style="padding:20px 40px 28px;border-top:1px solid #f0f0f0;text-align:center;">
              <p style="margin:0;font-size:12px;color:#aaa;line-height:1.6;">
                Это автоматическое уведомление с сайта
                <a href="https://rubmaster.ru" style="color:#C1171D;text-decoration:none;">rubmaster.ru</a><br>
                ООО «Промсервис» · г. Владимир, ул. Полины Осипенко, 58
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
```

---

## Переменные шаблона

| Переменная | Откуда берётся              |
|------------|-----------------------------|
| `{{name}}` | Поле «Ваше имя» из формы   |
| `{{phone}}`| Поле «Номер телефона»       |

---

## Как применить

1. В EmailJS Dashboard → **Email Templates** → **Create New Template**
2. Переключиться в режим **HTML Editor**
3. Вставить код выше
4. В поле **Subject** написать: `Новая заявка с сайта rubmaster.ru — {{name}}`
5. Сохранить → скопировать **Template ID** → вставить в `emailjs.service.ts`
