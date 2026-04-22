import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { EmailjsService } from '../../services/emailjs.service';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule, RouterLink],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {
  private emailjs = inject(EmailjsService);

  public name = signal('');
  public phone = signal('');
  public sent = signal(false);
  public sending = signal(false);
  public agreed = signal(false);
  public agreeError = signal(false);
  public sendError = signal(false);

  public submit() {
    if (!this.name() || !this.phone()) return;
    if (!this.agreed()) {
      this.agreeError.set(true);
      setTimeout(() => this.agreeError.set(false), 820);
      return;
    }

    this.sending.set(true);
    this.sendError.set(false);

    this.emailjs
      .send(this.name(), this.phone())
      .then(() => this.sent.set(true))
      .catch(() => this.sendError.set(true))
      .finally(() => this.sending.set(false));
  }
}
