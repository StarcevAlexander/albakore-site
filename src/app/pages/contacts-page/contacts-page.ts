import { Component } from '@angular/core';
import { ContactForm } from '../../sections/contact-form/contact-form';

@Component({
  selector: 'app-contacts-page',
  imports: [ContactForm],
  template: `<app-contact-form></app-contact-form>`,
})
export class ContactsPage {}
