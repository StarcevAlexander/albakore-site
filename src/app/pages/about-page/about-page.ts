import { Component, inject } from '@angular/core';
import { About } from '../../sections/about/about';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-about-page',
  imports: [About],
  template: `<div class="page-offset"><app-about></app-about></div>`,
  styles: [`.page-offset { padding-top: 70px; }`],
})
export class AboutPage {
  constructor() {
    inject(MetaService).set({
      title: 'О компании — Производственная компания Промсервис',
      description: 'ООО «Промсервис» — производитель рубильных машин и измельчителей древесины. Полный производственный цикл: лазерная резка, металлообработка, сварка, порошковая окраска.',
      keywords: 'ООО Промсервис, производство измельчителей, о компании, Владимир',
    });
  }
}
