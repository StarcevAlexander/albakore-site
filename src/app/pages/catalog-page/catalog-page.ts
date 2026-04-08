import { Component } from '@angular/core';
import { Catalog } from '../../sections/catalog/catalog';

@Component({
  selector: 'app-catalog-page',
  imports: [Catalog],
  template: `<app-catalog></app-catalog>`,
})
export class CatalogPage {}
