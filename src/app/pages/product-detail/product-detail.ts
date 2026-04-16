import { Component, inject, input, computed, signal, effect, DOCUMENT } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CatalogService } from '../../services/catalog.service';
import { ShareButton } from '../../components/share-button/share-button';
import { InstallmentBadge } from '../../components/installment-badge/installment-badge';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink, ShareButton, InstallmentBadge],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail {
  private catalogService = inject(CatalogService);
  private doc = inject(DOCUMENT);
  private metaService = inject(MetaService);

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

  constructor() {
    effect(() => {
      const m = this.model();
      if (!m) return;

      this.metaService.set({
        title: `${m.name} — измельчитель древесины`,
        description: m.description
          ?? `Измельчитель древесины ${m.name}. Технические характеристики, фотографии, цена. Купить у производителя.`,
        keywords: `${m.name}, измельчитель веток, рубильная машина, купить`,
        image: `https://rubmaster.ru${m.img}`,
      });

      this.setProductSchema(m);
    });
  }

  setPhoto(src: string) {
    this.activePhoto.set(src);
  }

  private setProductSchema(m: { name: string; description?: string; img: string; specs?: { label: string; value: string }[] }) {
    const existing = this.doc.querySelector<HTMLScriptElement>('script[data-schema="product"]');
    const el: HTMLScriptElement = existing ?? this.doc.createElement('script');
    el.type = 'application/ld+json';
    el.setAttribute('data-schema', 'product');
    el.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: m.name,
      description: m.description ?? '',
      image: `https://rubmaster.ru${m.img}`,
      brand: { '@type': 'Brand', name: 'Промимпорт' },
      manufacturer: { '@type': 'Organization', name: 'ООО «Промсервис»', url: 'https://rubmaster.ru' },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'RUB',
        price: '0',
        priceSpecification: { '@type': 'UnitPriceSpecification', price: 'Договорная' },
        availability: 'https://schema.org/InStock',
        seller: { '@type': 'Organization', name: 'ООО «Промсервис»' },
      },
    });
    if (!existing) this.doc.head.appendChild(el);
  }
}
