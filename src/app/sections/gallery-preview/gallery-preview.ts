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
  @ViewChild('swiperEl') private swiperEl!: ElementRef;

  private swiper!: Swiper;

  public photos = [
    { src: '/images/mobi-300-1.webp', alt: 'Измельчитель Моби-300' },
    { src: '/images/mobi-120-1.webp', alt: 'Измельчитель Моби-120' },
    { src: '/images/mobi-250-1.webp', alt: 'Измельчитель Моби-250' },
    { src: '/images/mobi-201-1.webp', alt: 'Измельчитель Моби-201' },
    { src: '/images/mrg-300-1.webp', alt: 'Измельчитель МРГ-300' },
    { src: '/images/mobi-161-1.webp', alt: 'Измельчитель Моби-161' },
    { src: '/images/mobi-300-2.webp', alt: 'Измельчитель Моби-300 в работе' },
    { src: '/images/mrg-250-1.webp', alt: 'Измельчитель МРГ-250 навесной' },
    { src: '/images/mobi-261-1.webp', alt: 'Измельчитель Моби-261' },
    { src: '/images/mobi-120-2.webp', alt: 'Измельчитель Моби-120 — вид сбоку' },
    { src: '/images/mobi-250-2.webp', alt: 'Измельчитель Моби-250 в работе' },
    { src: '/images/mobi-300-3.webp', alt: 'Измельчитель Моби-300 — крупный план' },
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

  public prev() { this.swiper.slidePrev(); }
  public next() { this.swiper.slideNext(); }
}
