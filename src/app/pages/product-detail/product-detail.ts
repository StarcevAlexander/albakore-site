import { Component, inject, input, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail {
  private catalogService = inject(CatalogService);

  slug = input<string>('');
  model = computed(() => this.catalogService.getBySlug(this.slug()));

  activePhoto = signal<string | null>(null);

  allPhotos = computed(() => {
    const m = this.model();
    if (!m) return [];
    return [m.img, ...(m.photos ?? [])];
  });

  currentPhoto = computed(() =>
    this.activePhoto() ?? this.model()?.img ?? ''
  );

  setPhoto(src: string) {
    this.activePhoto.set(src);
  }
}
