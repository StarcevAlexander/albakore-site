import { Component, signal, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  menuOpen = signal(false);
  scrolled = signal(false);

  navLinks = [
    { label: 'Главная', href: '#' },
    { label: 'Модельный ряд', href: '#catalog' },
    { label: 'Фотогалерея', href: '#gallery' },
    { label: 'О компании', href: '#about' },
    { label: 'Дилеры', href: '#contacts' },
    { label: 'Контакты', href: '#contacts' },
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
