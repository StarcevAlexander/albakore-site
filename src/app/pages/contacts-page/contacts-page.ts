import { Component, inject } from '@angular/core';
import { ContactForm } from '../../sections/contact-form/contact-form';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-contacts-page',
  imports: [ContactForm],
  templateUrl: './contacts-page.html',
  styleUrl: './contacts-page.scss',
})
export class ContactsPage {
  constructor() {
    inject(MetaService).set({
      title: 'Написать нам — получить консультацию',
      description: 'Оставьте заявку на бесплатную консультацию по измельчителям древесины Промсервис. Ответим в ближайшее время.',
    });
  }
}
