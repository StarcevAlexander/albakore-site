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
  private readonly catalogService = inject(CatalogService);
  private readonly doc = inject(DOCUMENT);
  private readonly metaService = inject(MetaService);

  public readonly slug = input<string>('');
  public readonly model = computed(() => this.catalogService.getBySlug(this.slug()));

  public readonly activePhoto = signal<string | null>(null);

  public readonly shareUrl = computed(() => this.doc.location.href);
  public readonly shareTitle = computed(() => this.model()?.name ?? '');

  public readonly allPhotos = computed(() => {
    const m = this.model();
    if (!m) return [];
    return [m.img, ...(m.photos ?? [])];
  });

  public readonly currentPhoto = computed(() =>
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

  public setPhoto(src: string) {
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
      brand: { '@type': 'Brand', name: 'Промсервис' },
      manufacturer: {
        '@type': 'Organization',
        name: 'ООО «Промсервис»',
        url: 'https://rubmaster.ru',
      },
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
