import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {
  name = signal('');
  phone = signal('');
  sent = signal(false);

  submit() {
    if (!this.name() || !this.phone()) return;
    // здесь будет EmailJS / другая интеграция
    this.sent.set(true);
  }
}
