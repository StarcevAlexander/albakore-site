import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

@Component({
  selector: 'app-hero-slider',
  imports: [],
  templateUrl: './hero-slider.html',
  styleUrl: './hero-slider.scss',
})
export class HeroSlider implements AfterViewInit {
  @ViewChild('swiperEl') swiperEl!: ElementRef;

  // Прямые URL изображений с siteapi CDN
  slides = [
    'https://s.siteapi.org/fd0650dee05b0a9.ru/carousel-fullscreen/pfoeiiir5vk04wgowcs0oogo40g0c4',
    'https://s.siteapi.org/fd0650dee05b0a9.ru/carousel-fullscreen/737xpeeittc880ow08g0kg08gogsoo',
    'https://s.siteapi.org/fd0650dee05b0a9.ru/carousel-fullscreen/48mey5z2h9k4socoss0gkcokk4ssgc',
    'https://s.siteapi.org/fd0650dee05b0a9.ru/carousel-fullscreen/cyoaixx6n4g80g0g8swg4g4sgo08kk',
    'https://s.siteapi.org/fd0650dee05b0a9.ru/carousel-fullscreen/myemoufgji8www4088w0gwcwgcg40s',
  ];

  ngAfterViewInit() {
    new Swiper(this.swiperEl.nativeElement, {
      modules: [Autoplay, Pagination, EffectFade],
      effect: 'fade',
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.hero-slider__dots',
        clickable: true,
        bulletClass: 'hero-slider__dot',
        bulletActiveClass: 'hero-slider__dot--active',
      },
    });
  }
}
