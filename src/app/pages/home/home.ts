import { Component, inject } from '@angular/core';
import { HeroSlider } from '../../sections/hero-slider/hero-slider';
import { HeroProducts } from '../../sections/hero-products/hero-products';
import { Video } from '../../sections/video/video';
import { About } from '../../sections/about/about';
import { GalleryPreview } from '../../sections/gallery-preview/gallery-preview';
import { CatalogPreview } from '../../sections/catalog-preview/catalog-preview';
import { ContactForm } from '../../sections/contact-form/contact-form';
import { ClientsPreview } from '../../sections/clients-preview/clients-preview';
import { SocialLinks } from '../../sections/social-links/social-links';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-home',
  imports: [
    HeroSlider,
    HeroProducts,
    Video,
    GalleryPreview,
    CatalogPreview,
    About,
    ClientsPreview,
    SocialLinks,
    ContactForm,
  ],
  template: `
    <app-hero-slider></app-hero-slider>
    <app-hero-products></app-hero-products>
    <app-video></app-video>
    <app-gallery-preview></app-gallery-preview>
    <app-catalog-preview></app-catalog-preview>
    <app-about></app-about>
    <app-clients-preview></app-clients-preview>
    <app-social-links></app-social-links>
    <app-contact-form></app-contact-form>
  `,
})
export class Home {
  constructor() {
    inject(MetaService).set({
      title: 'Прицепные измельчители древесины МОБИ — надёжность, проверенная в деле',
      description:
        'Производство рубильных машин и прицепных измельчителей древесины. 15 лет профессионального качества. Более 200 машин работают в регионах России.',
      keywords:
        'измельчитель древесины, рубильная машина, измельчитель веток, Моби, МРГ, Промсервис, ООО Промсервис',
      image: 'https://rubmaster.ru/images/mobi-300-1.webp',
    });
  }
}
