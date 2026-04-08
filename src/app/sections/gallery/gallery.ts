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
    { src: '//i.siteapi.org/zxPiu8qEyZoojTcvukwVrlrmwCU=/fit-in/608x2000/filters:format(webp):upscale()/s2.siteapi.org/9d06b80821fb43d/carousel-fullscreen/irexuup19wgk44so4ws408c0owow8g', alt: 'Мобильный измельчитель Моби-300' },
    { src: '//i.siteapi.org/oPKbCzTTA8OhUJJIms7LAp3aB3Y=/fit-in/608x2000/filters:format(webp):upscale()/s2.siteapi.org/9d06b80821fb43d/carousel-fullscreen/q5eep4djb0g0wkk8ksoc0w84wo8osg', alt: 'Мобильный измельчитель Моби-250' },
    { src: '//i.siteapi.org/tPCMFYgMFSz8ejwOnJPeUYsWQKo=/fit-in/608x2000/filters:format(webp):upscale()/s2.siteapi.org/9d06b80821fb43d/carousel-fullscreen/kfzlut0937k04cg8408k8ock80g4k0', alt: 'Мобильный измельчитель Моби-200' },
    { src: '//i.siteapi.org/-N5UqWwUlUwrRjOaR3i7aU9Rz40=/fit-in/608x2000/filters:format(webp):upscale()/s2.siteapi.org/9d06b80821fb43d/carousel-fullscreen/qayg5m0bwaowg8cgc0w4c4ck8o8wkk', alt: 'Мобильный измельчитель Моби-160' },
    { src: '//i.siteapi.org/DGFOh7YyVm71sY_SejpXduPTRFs=/fit-in/424x2000/filters:format(webp):upscale()/s2.siteapi.org/7e0dacbfe60743c/cards/iwhf80akuncow8ws8c48oo48s00ooo', alt: 'RubMaster — производство' },
    { src: '//i.siteapi.org/lOdwvSM3t07IACu16tl1Zci4-Nc=/fit-in/424x2000/filters:format(webp):upscale()/s2.siteapi.org/7e0dacbfe60743c/cards/rf4egmaybi8woo80gc8sss00w0w4k8', alt: 'RubMaster — сервис' },
    { src: '//i.siteapi.org/zIr6Vez56aWXz8TFadE1sgYzJ0Q=/fit-in/424x2000/filters:format(webp):upscale()/s2.siteapi.org/7e0dacbfe60743c/cards/69kfucsnubs44o84ogww44wwossw4o', alt: 'RubMaster — оборудование' },
    { src: '//i.siteapi.org/j-QxFLJ0R4bWsWI632L3_q5W4ZQ=/fit-in/212x2000/filters:format(webp):upscale()/s2.siteapi.org/7e0dacbfe60743c/horizontal-cards/ly3yfss5h28gok4s44gg0ccs40s0oc', alt: 'RubMaster — измельчитель в работе' },
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
