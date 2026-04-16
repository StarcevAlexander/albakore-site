import { Component, inject } from '@angular/core';
import { ContactForm } from '../../sections/contact-form/contact-form';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-contacts-page',
  imports: [ContactForm],
  template: `<div class="page-offset"><app-contact-form></app-contact-form></div>`,
  styles: [`.page-offset { padding-top: 48px; }`],
})
export class ContactsPage {
  constructor() {
    inject(MetaService).set({
      title: 'Написать нам — получить консультацию',
      description: 'Оставьте заявку на бесплатную консультацию по измельчителям древесины Промимпорт. Ответим в ближайшее время.',
    });
  }
}
