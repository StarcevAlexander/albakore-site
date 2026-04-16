import { Component, inject, input, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CatalogService } from '../../services/catalog.service';
import { ShareButton } from '../../components/share-button/share-button';
import { InstallmentBadge } from '../../components/installment-badge/installment-badge';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink, ShareButton, InstallmentBadge],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail {
  private catalogService = inject(CatalogService);
  private doc = inject(DOCUMENT);

  slug = input<string>('');
  model = computed(() => this.catalogService.getBySlug(this.slug()));

  activePhoto = signal<string | null>(null);

  shareUrl = computed(() => this.doc.location.href);
  shareTitle = computed(() => this.model()?.name ?? '');

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
