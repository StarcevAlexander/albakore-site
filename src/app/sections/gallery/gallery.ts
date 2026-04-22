import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery implements AfterViewInit {
  @ViewChild('swiperEl') private swiperEl!: ElementRef;

  public readonly photos = [
    { src: '/images/mobi-300-1.webp', alt: 'Измельчитель Моби-300' },
    { src: '/images/mobi-120-1.webp', alt: 'Измельчитель Моби-120' },
    { src: '/images/mobi-250-1.webp', alt: 'Измельчитель Моби-250' },
    { src: '/images/mobi-201-1.webp', alt: 'Измельчитель Моби-201' },
    { src: '/images/mrg-300-1.webp', alt: 'Измельчитель МРГ-300' },
    { src: '/images/mobi-161-1.webp', alt: 'Измельчитель Моби-161' },
    { src: '/images/mobi-300-2.webp', alt: 'Измельчитель Моби-300 в работе' },
    { src: '/images/mrg-250-1.webp', alt: 'Измельчитель МРГ-250 навесной' },
    { src: '/images/mobi-120-2.webp', alt: 'Измельчитель Моби-120 — вид сбоку' },
    { src: '/images/mobi-261-1.webp', alt: 'Измельчитель Моби-261' },
    { src: '/images/mobi-250-2.webp', alt: 'Измельчитель Моби-250 — в работе' },
    { src: '/images/mobi-300-3.webp', alt: 'Измельчитель Моби-300 — крупный план' },
    { src: '/images/mobi-120-3.webp', alt: 'Измельчитель Моби-120 — на объекте' },
    { src: '/images/mrg-250-2.webp', alt: 'Измельчитель МРГ-250 — вид сбоку' },
    { src: '/images/mobi-201-2.webp', alt: 'Измельчитель Моби-201 — в работе' },
    { src: '/images/mobi-161-2.webp', alt: 'Измельчитель Моби-161 — крупный план' },
    { src: '/images/mobi-261-2.webp', alt: 'Измельчитель Моби-261 — вид сзади' },
  ];

  ngAfterViewInit() {
    new Swiper(this.swiperEl.nativeElement, {
      modules: [Navigation],
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: '.gallery-next',
        prevEl: '.gallery-prev',
      },
      breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3.5 },
      },
    });
  }
}
