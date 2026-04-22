import { Component, signal, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  public readonly menuOpen = signal(false);
  public readonly scrolled = signal(false);

  public readonly navLinks = [
    { label: 'Главная', route: '/' },
    { label: 'Модельный ряд', route: '/catalog' },
    { label: 'Фотогалерея', route: '/gallery' },
    { label: 'Видео', route: '/video' },
    { label: 'О компании', route: '/about' },
    { label: 'Рассрочка', route: '/installment' },
    { label: 'Сервис и ремонт', route: '/service' },
    { label: 'Документация', route: '/docs' },
    { label: 'Дилеры', route: '/dealers' },
    { label: 'Контакты', route: '/company-contacts' },
  ];

  public readonly navDesktop = [
    { label: 'Главная', route: '/' },
    { label: 'Модельный ряд', route: '/catalog' },
    { label: 'Фотогалерея', route: '/gallery' },
    { label: 'Видео', route: '/video' },
    { label: 'Контакты', route: '/company-contacts' },
  ];

  @HostListener('window:scroll')
  public onScroll() {
    this.scrolled.set(window.scrollY > 50);
  }

  public toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  public closeMenu() {
    this.menuOpen.set(false);
  }
}
