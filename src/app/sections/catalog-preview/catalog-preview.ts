import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CATALOG_ITEMS } from '../../data/catalog.data';

@Component({
  selector: 'app-catalog-preview',
  imports: [RouterLink],
  templateUrl: './catalog-preview.html',
  styleUrl: './catalog-preview.scss',
})
export class CatalogPreview {
  public readonly items = CATALOG_ITEMS.slice(0, 6);
}
