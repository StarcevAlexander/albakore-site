import { Component, inject } from '@angular/core';
import { Catalog } from '../../sections/catalog/catalog';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-catalog-page',
  imports: [Catalog],
  template: `<div class="page-offset"><app-catalog></app-catalog></div>`,
  styles: [`.page-offset { padding-top: 70px; }`],
})
export class CatalogPage {
  constructor() {
    inject(MetaService).set({
      title: 'Модельный ряд измельчителей древесины',
      description: 'Прицепные и стационарные измельчители древесины МОБИ и МРГ. Диаметр переработки от 120 до 300 мм. Бензиновый, дизельный и электрический привод.',
      keywords: 'купить измельчитель древесины, модельный ряд, Моби-120, Моби-250, Моби-300, МРГ-300',
    });
  }
}
