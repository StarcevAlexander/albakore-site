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

  private allLinks = [
    { label: 'Главная', route: '/' },
    { label: 'Модельный ряд', route: '/catalog' },
    { label: 'Фотогалерея', route: '/gallery' },
    { label: 'Видео', route: '/video' },
    { label: 'Сервис и ремонт', route: '/service' },
    { label: 'Лизинг', route: '/leasing' },
    { label: 'О компании', route: '/about' },
    { label: 'Дилеры', route: '/dealers' },
    { label: 'Контакты', route: '/company-contacts' },
  ];

  navRow1 = this.allLinks.slice(0, 5);
  navRow2 = this.allLinks.slice(5);
  navLinks = this.allLinks; // для мобильного меню

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
