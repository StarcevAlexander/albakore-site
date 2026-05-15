import { Component, AfterViewInit, ElementRef, ViewChild, NgZone, inject, signal } from '@angular/core';
import type Swiper from 'swiper';

@Component({
  selector: 'app-gallery-preview',
  imports: [],
  templateUrl: './gallery-preview.html',
  styleUrl: './gallery-preview.scss',
})
export class GalleryPreview implements AfterViewInit {
  @ViewChild('swiperEl') private swiperEl!: ElementRef<HTMLElement>;

  private readonly zone = inject(NgZone);
  private swiper?: Swiper;
  protected readonly ready = signal(false);

  public readonly photos = [
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
    this.zone.runOutsideAngular(() => {
      const start = () => this.initSwiper();
      const onUserIntent = () => {
        window.removeEventListener('pointerdown', onUserIntent, true);
        window.removeEventListener('keydown', onUserIntent, true);
        window.removeEventListener('scroll', onUserIntent, true);
        start();
      };
      window.addEventListener('pointerdown', onUserIntent, { capture: true, once: true, passive: true });
      window.addEventListener('keydown', onUserIntent, { capture: true, once: true });
      window.addEventListener('scroll', onUserIntent, { capture: true, once: true, passive: true });
      setTimeout(start, 6000);
    });
  }

  private async initSwiper() {
    if (this.swiper || this.ready()) return;
    const [{ default: SwiperCtor }, { Autoplay }] = await Promise.all([
      import('swiper'),
      import('swiper/modules'),
    ]);
    this.zone.run(() => this.ready.set(true));
    await new Promise<void>(r => setTimeout(r, 0));
    this.swiper = new SwiperCtor(this.swiperEl.nativeElement, {
      modules: [Autoplay],
      loop: true,
      slidesPerView: 1.2,
      spaceBetween: 12,
      centeredSlides: false,
      autoplay: { delay: 3500, disableOnInteraction: false },
      breakpoints: {
        480: { slidesPerView: 2.1, spaceBetween: 14 },
        768: { slidesPerView: 3.1, spaceBetween: 16 },
        1100: { slidesPerView: 4.1, spaceBetween: 16 },
      },
    });
  }

  public prev() { this.swiper?.slidePrev(); }
  public next() { this.swiper?.slideNext(); }
}
