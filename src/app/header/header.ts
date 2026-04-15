import { Component, signal, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  menuOpen = signal(false);
  scrolled = signal(false);

  navLinks = [
    { label: 'Главная', route: '/' },
    { label: 'Модельный ряд', route: '/catalog' },
    { label: 'Фотогалерея', route: '/gallery' },
    { label: 'Видео', route: '/video' },
    { label: 'Сервис и ремонт', route: '/service' },
    { label: 'Дилеры', route: '/dealers' },
    { label: 'Контакты', route: '/company-contacts' },
  ];

  navDesktop = [
    { label: 'Главная', route: '/' },
    { label: 'Модельный ряд', route: '/catalog' },
    { label: 'Фотогалерея', route: '/gallery' },
    { label: 'Дилеры', route: '/dealers' },
    { label: 'Контакты', route: '/company-contacts' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 50);
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
