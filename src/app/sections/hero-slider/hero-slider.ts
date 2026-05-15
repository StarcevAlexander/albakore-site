import { Component, AfterViewInit, ElementRef, ViewChild, signal, NgZone, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import type Swiper from 'swiper';

@Component({
  selector: 'app-hero-slider',
  imports: [RouterLink],
  templateUrl: './hero-slider.html',
  styleUrl: './hero-slider.scss',
})
export class HeroSlider implements AfterViewInit {
  @ViewChild('swiperEl') private swiperEl!: ElementRef<HTMLElement>;

  private readonly zone = inject(NgZone);
  private swiper?: Swiper;
  protected readonly ready = signal(false);

  public readonly slides = [
    { src: '/images/mobi-300-1.webp', srcSm: '/images/mobi-300-1-sm.webp' },
    { src: '/images/mobi-250-1.webp', srcSm: '/images/mobi-250-1-sm.webp' },
    { src: '/images/mobi-201-1.webp', srcSm: '/images/mobi-201-1-sm.webp' },
    { src: '/images/mobi-161-1.webp', srcSm: '/images/mobi-161-1-sm.webp' },
    { src: '/images/mrg-300-1.webp', srcSm: '/images/mrg-300-1-sm.webp' },
    { src: '/images/mobi-120-1.webp', srcSm: '/images/mobi-120-1-sm.webp' },
    { src: '/images/mrg-250-1.webp', srcSm: '/images/mrg-250-1-sm.webp' },
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
    const [{ default: SwiperCtor }, { Autoplay, EffectFade }] = await Promise.all([
      import('swiper'),
      import('swiper/modules'),
    ]);
    this.zone.run(() => this.ready.set(true));
    await new Promise<void>(r => setTimeout(r, 0));
    this.swiper = new SwiperCtor(this.swiperEl.nativeElement, {
      modules: [Autoplay, EffectFade],
      effect: 'fade',
      loop: true,
      speed: 1000,
      autoplay: { delay: 5000, disableOnInteraction: false },
    });
  }

  public prev() { this.swiper?.slidePrev(); }
  public next() { this.swiper?.slideNext(); }
}
