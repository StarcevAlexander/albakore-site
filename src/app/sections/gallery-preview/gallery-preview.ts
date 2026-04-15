import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

@Component({
  selector: 'app-gallery-preview',
  imports: [],
  templateUrl: './gallery-preview.html',
  styleUrl: './gallery-preview.scss',
})
export class GalleryPreview implements AfterViewInit {
  @ViewChild('swiperEl') swiperEl!: ElementRef;

  private swiper!: Swiper;

  photos = [
    { src: 'images/mobi-300.webp', alt: 'Мобильный измельчитель Моби-300' },
    { src: 'images/mobi-250.webp', alt: 'Мобильный измельчитель Моби-250' },
    { src: 'images/mobi-200.webp', alt: 'Мобильный измельчитель Моби-200' },
    { src: 'images/mobi-160.webp', alt: 'Мобильный измельчитель Моби-160' },
    { src: 'images/mrg-300.webp', alt: 'Стационарный измельчитель МРГ-300' },
    { src: 'images/mobi-300.webp', alt: 'Измельчитель Моби-300 — вид сбоку' },
    { src: 'images/mobi-250.webp', alt: 'Измельчитель Моби-250 — в работе' },
    { src: 'images/mobi-200.webp', alt: 'Измельчитель Моби-200 — крупный план' },
  ];

  ngAfterViewInit() {
    this.swiper = new Swiper(this.swiperEl.nativeElement, {
      modules: [Autoplay],
      loop: true,
      slidesPerView: 1.2,
      spaceBetween: 12,
      centeredSlides: false,
      autoplay: { delay: 3500, disableOnInteraction: false },
      breakpoints: {
        480:  { slidesPerView: 2.1, spaceBetween: 14 },
        768:  { slidesPerView: 3.1, spaceBetween: 16 },
        1100: { slidesPerView: 4.1, spaceBetween: 16 },
      },
    });
  }

  prev() { this.swiper.slidePrev(); }
  next() { this.swiper.slideNext(); }
}
