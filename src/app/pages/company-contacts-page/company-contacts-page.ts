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
      value: '+7 (910) 778-93-58',
      href: 'tel:+79107789358',
    },
    {
      label: 'E-mail',
      value: 'promservis-33@mail.ru',
      href: 'mailto:promservis-33@mail.ru',
    },
    {
      label: 'Адрес',
      value: 'ул. Полины Осипенко, 58, г. Владимир, 600007',
      href: null,
    },
    {
      label: 'Режим работы',
      value: 'Пн–Пт: 9:00–17:00',
      href: null,
    },
    {
      label: 'Менеджер',
      value: 'Евгений Котков',
      href: null,
    },
  ];
}
