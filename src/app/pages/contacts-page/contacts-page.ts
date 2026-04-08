import { Component } from '@angular/core';
import { ContactForm } from '../../sections/contact-form/contact-form';

@Component({
  selector: 'app-contacts-page',
  imports: [ContactForm],
  template: `<div class="page-offset"><app-contact-form></app-contact-form></div>`,
  styles: [`.page-offset { padding-top: 48px; }`],
})
export class ContactsPage {}
