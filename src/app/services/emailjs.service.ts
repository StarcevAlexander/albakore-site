import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_wq3ndk7';
const TEMPLATE_ID = 'template_nrv1ty6';
const PUBLIC_KEY = 'NtAvBi9vDPIZ8Ky_9';

@Injectable({ providedIn: 'root' })
export class EmailjsService {
  public send(name: string, phone: string): Promise<void> {
    return emailjs
      .send(SERVICE_ID, TEMPLATE_ID, { name, phone }, { publicKey: PUBLIC_KEY })
      .then(() => undefined);
  }
}
