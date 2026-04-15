import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import Swiper from 'swiper';
import { Autoplay, EffectFade } from 'swiper/modules';

@Component({
  selector: 'app-hero-slider',
  imports: [RouterLink],
  templateUrl: './hero-slider.html',
  styleUrl: './hero-slider.scss',
})
export class HeroSlider implements AfterViewInit {
  @ViewChild('swiperEl') swiperEl!: ElementRef;

  private swiper!: Swiper;

  slides = [
    'images/mobi-300-1.webp',
    'images/mobi-250-1.webp',
    'images/mobi-201-1.webp',
    'images/mobi-161-1.webp',
    'images/mrg-300-1.webp',
    'images/mobi-120-1.webp',
    'images/mrg-250-1.webp',
  ];

  ngAfterViewInit() {
    this.swiper = new Swiper(this.swiperEl.nativeElement, {
      modules: [Autoplay, EffectFade],
      effect: 'fade',
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    });
  }

  prev() { this.swiper.slidePrev(); }
  next() { this.swiper.slideNext(); }
}
