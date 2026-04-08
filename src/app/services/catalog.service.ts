import { Injectable } from '@angular/core';
import { CATALOG_ITEMS } from '../data/catalog.data';

export interface BoatModel {
  slug: string;
  name: string;
  img: string;
  length: string;
  capacity: string;
  material: string;
  description?: string;
  specs?: { label: string; value: string }[];
}

@Injectable({ providedIn: 'root' })
export class CatalogService {
  readonly models: BoatModel[] = CATALOG_ITEMS;

  getBySlug(slug: string): BoatModel | undefined {
    return this.models.find(m => m.slug === slug);
  }
}
