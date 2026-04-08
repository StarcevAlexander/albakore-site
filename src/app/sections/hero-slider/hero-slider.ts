import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import Swiper from 'swiper';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

@Component({
  selector: 'app-hero-slider',
  imports: [RouterLink],
  templateUrl: './hero-slider.html',
  styleUrl: './hero-slider.scss',
})
export class HeroSlider implements AfterViewInit {
  @ViewChild('swiperEl') swiperEl!: ElementRef;

  slides = [
    'images/mobi-300.webp',
    'images/mobi-250.webp',
    'images/mobi-200.webp',
    'images/mobi-160.webp',
    'images/mrg-300.webp',
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
