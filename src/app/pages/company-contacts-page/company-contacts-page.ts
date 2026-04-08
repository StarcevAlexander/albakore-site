import { Component } from '@angular/core';
import { ContactForm } from '../../sections/contact-form/contact-form';

@Component({
  selector: 'app-company-contacts-page',
  imports: [ContactForm],
  templateUrl: './company-contacts-page.html',
  styleUrl: './company-contacts-page.scss',
})
export class CompanyContactsPage {
  contacts = [
    {
      label: 'Телефон',
      value: '8 (812) 930-16-28',
      href: 'tel:+78129301628',
    },
    {
      label: 'E-mail',
      value: 'info@albakore.ru',
      href: 'mailto:info@albakore.ru',
    },
    {
      label: 'Адрес офиса',
      value: 'Санкт-Петербург, наб. Обводного канала, 14',
      href: null,
    },
    {
      label: 'Режим работы',
      value: 'Пн–Пт: 9:00–18:00, Сб: 10:00–15:00',
      href: null,
    },
  ];
}
