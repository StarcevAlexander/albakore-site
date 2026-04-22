import { Component, inject } from '@angular/core';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-terms-page',
  imports: [],
  templateUrl: './terms-page.html',
  styleUrl: './terms-page.scss',
})
export class TermsPage {
  constructor() {
    inject(MetaService).set({
      title: 'Пользовательское соглашение',
      description: 'Пользовательское соглашение сайта Промсервис.',
      noIndex: true,
    });
  }
}
