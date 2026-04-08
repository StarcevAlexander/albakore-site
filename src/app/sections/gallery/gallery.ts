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
  @ViewChild('swiperEl') swiperEl!: ElementRef;

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
