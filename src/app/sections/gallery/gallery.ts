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
    { src: '//i.siteapi.org/vmolUUUgcwAK6OPTB-eIO8Qx9X4=/fit-in/424x2000/filters:format(webp):upscale()/s.siteapi.org/fd0650dee05b0a9.ru/cards/tn41f4sgeaswkgww0cosgssws4ggcs', alt: 'Albakore фото 1' },
    { src: '//i.siteapi.org/mI3KBkJH4upLcQ490j1BePlYI4s=/fit-in/424x2000/filters:format(webp):upscale()/s.siteapi.org/fd0650dee05b0a9.ru/cards/n3xvg6psblco0scko80o8844gcs84o', alt: 'Albakore фото 2' },
    { src: '//i.siteapi.org/8sNeOnLcityXl2US1VkDpo3Lg2k=/fit-in/424x2000/filters:format(webp):upscale()/s.siteapi.org/fd0650dee05b0a9.ru/cards/leg5ljjcu00k84o0oc4g0gk84osoks', alt: 'Albakore фото 3' },
    { src: '//i.siteapi.org/4BMl_xikeOLlLm6u9jTIrXz1Zuc=/fit-in/424x2000/filters:format(webp):upscale()/s.siteapi.org/fd0650dee05b0a9.ru/cards/db2o4tipgagw48ocs4kcgcwcgss4cc', alt: 'Albakore фото 4' },
    { src: '//i.siteapi.org/vmolUUUgcwAK6OPTB-eIO8Qx9X4=/fit-in/424x2000/filters:format(webp):upscale()/s.siteapi.org/fd0650dee05b0a9.ru/cards/tn41f4sgeaswkgww0cosgssws4ggcs', alt: 'Albakore фото 5' },
    { src: '//i.siteapi.org/mI3KBkJH4upLcQ490j1BePlYI4s=/fit-in/424x2000/filters:format(webp):upscale()/s.siteapi.org/fd0650dee05b0a9.ru/cards/n3xvg6psblco0scko80o8844gcs84o', alt: 'Albakore фото 6' },
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
