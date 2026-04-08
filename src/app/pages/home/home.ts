import { Component } from '@angular/core';
import { HeroSlider } from '../../sections/hero-slider/hero-slider';
import { HeroProducts } from '../../sections/hero-products/hero-products';
import { Video } from '../../sections/video/video';
import { CtaBlock } from '../../sections/cta-block/cta-block';

@Component({
  selector: 'app-home',
  imports: [HeroSlider, HeroProducts, Video, CtaBlock],
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
      <app-cta-block></app-cta-block>
    } @placeholder {
      <div style="min-height: 320px"></div>
    }
  `,
})
export class Home {}
