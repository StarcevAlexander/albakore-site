import { Component } from '@angular/core';
import { HeroSlider } from '../../sections/hero-slider/hero-slider';
import { HeroProducts } from '../../sections/hero-products/hero-products';
import { Video } from '../../sections/video/video';
import { About } from '../../sections/about/about';
import { GalleryPreview } from '../../sections/gallery-preview/gallery-preview';
import { CatalogPreview } from '../../sections/catalog-preview/catalog-preview';
import { CtaBlock } from '../../sections/cta-block/cta-block';
import { ContactForm } from '../../sections/contact-form/contact-form';

@Component({
  selector: 'app-home',
  imports: [
    HeroSlider,
    HeroProducts,
    Video,
    GalleryPreview,
    CatalogPreview,
    About,
    CtaBlock,
    ContactForm,
  ],
  template: `
    <app-hero-slider></app-hero-slider>

    @defer (on viewport) {
      <app-hero-products></app-hero-products>
    } @placeholder {
      <div style="min-height: 480px"></div>
    }

    @defer (on viewport) {
      <app-video></app-video>
    } @placeholder {
      <div style="min-height: 560px"></div>
    }

    @defer (on viewport) {
      <app-gallery-preview></app-gallery-preview>
    } @placeholder {
      <div style="min-height: 300px"></div>
    }

    @defer (on viewport) {
      <app-catalog-preview></app-catalog-preview>
    } @placeholder {
      <div style="min-height: 600px"></div>
    }

    @defer (on viewport) {
      <app-about></app-about>
    } @placeholder {
      <div style="min-height: 480px"></div>
    }

    @defer (on viewport) {
      <app-contact-form></app-contact-form>
    } @placeholder {
      <div style="min-height: 600px"></div>
    }
  `,
})
export class Home {}
