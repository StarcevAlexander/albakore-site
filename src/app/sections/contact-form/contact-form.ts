import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule, RouterLink],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {
  name = signal('');
  phone = signal('');
  sent = signal(false);
  agreed = signal(false);
  agreeError = signal(false);

  submit() {
    if (!this.name() || !this.phone()) return;
    if (!this.agreed()) {
      this.agreeError.set(true);
      setTimeout(() => this.agreeError.set(false), 820);
      return;
    }
    // здесь будет EmailJS / другая интеграция
    this.sent.set(true);
  }
}
