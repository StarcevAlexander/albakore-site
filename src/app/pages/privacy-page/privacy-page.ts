import { Component, inject } from '@angular/core';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-privacy-page',
  imports: [],
  templateUrl: './privacy-page.html',
  styleUrl: './privacy-page.scss',
})
export class PrivacyPage {
  constructor() {
    inject(MetaService).set({
      title: 'Политика конфиденциальности',
      description: 'Политика конфиденциальности сайта Промимпорт.',
      noIndex: true,
    });
  }
}
