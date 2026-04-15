import { Component, inject, input, computed, signal, DOCUMENT } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CatalogService } from '../../services/catalog.service';
import { ShareModal } from '../../components/share-modal/share-modal';

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink, ShareModal],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail {
  private catalogService = inject(CatalogService);
  private doc = inject(DOCUMENT);

  slug = input<string>('');
  model = computed(() => this.catalogService.getBySlug(this.slug()));

  activePhoto = signal<string | null>(null);
  shareOpen = signal(false);

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
