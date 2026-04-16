import { Injectable, inject, DOCUMENT } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

const BASE_URL = 'https://rubmaster.ru';
const DEFAULT_IMG = `${BASE_URL}/images/mobi-300-1.webp`;
const SITE_NAME = 'Промимпорт';

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  noIndex?: boolean;
}

@Injectable({ providedIn: 'root' })
export class MetaService {
  private meta = inject(Meta);
  private titleService = inject(Title);
  private router = inject(Router);
  private doc = inject(DOCUMENT);

  set(data: PageMeta): void {
    const url = BASE_URL + this.router.url;
    const image = data.image ?? DEFAULT_IMG;
    const fullTitle = `${data.title} | ${SITE_NAME}`;

    this.titleService.setTitle(fullTitle);

    this.meta.updateTag({ name: 'description', content: data.description });
    if (data.keywords) {
      this.meta.updateTag({ name: 'keywords', content: data.keywords });
    }
    this.meta.updateTag({
      name: 'robots',
      content: data.noIndex ? 'noindex,nofollow' : 'index,follow',
    });

    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: image });

    const canonical = this.doc.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) canonical.href = url;
  }
}
