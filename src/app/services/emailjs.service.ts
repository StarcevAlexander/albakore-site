import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'YOUR_SERVICE_ID';
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const PUBLIC_KEY = 'NtAvBi9vDPIZ8Ky_9';

@Injectable({ providedIn: 'root' })
export class EmailjsService {
  send(name: string, phone: string): Promise<void> {
    return emailjs
      .send(SERVICE_ID, TEMPLATE_ID, { name, phone }, { publicKey: PUBLIC_KEY })
      .then(() => undefined);
  }
}
