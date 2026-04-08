import { Component } from '@angular/core';
import { Catalog } from '../../sections/catalog/catalog';

@Component({
  selector: 'app-catalog-page',
  imports: [Catalog],
  template: `<div class="page-offset"><app-catalog></app-catalog></div>`,
  styles: [`.page-offset { padding-top: 70px; }`],
})
export class CatalogPage {}
