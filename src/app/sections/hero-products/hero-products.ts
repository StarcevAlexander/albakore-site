import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-products',
  imports: [RouterLink],
  templateUrl: './hero-products.html',
  styleUrl: './hero-products.scss',
})
export class HeroProducts {
  products = [
    {
      badge: 'Флагман серии',
      title: 'Прицепной измельчитель',
      model: 'Моби-300',
      desc: 'Максимальная мощность и производительность в линейке прицепных измельчителей. Диаметр переработки до 30 см, дизельный двигатель 156 л.с., исполнение с диском или барабаном. Система «No Stress» защищает привод от перегрузок.',
      img: '/images/mobi-300-1.webp',
      catalogUrl: '/catalog/mobi-300',
      reversed: false,
    },
    {
      badge: 'Самый популярный в нашем модельном ряду',
      title: 'Прицепной измельчитель',
      model: 'Моби-250',
      desc: 'Разработан инженерами компании Рубмастер. Выпускается с 2015 года. Оптимальное соотношение мощности привода, расхода горючего и производительности. Диаметр переработки до 25 см, неприхотливый дизельный двигатель 81 л.с. Система «No Stress» защищает привод от перегрузок.',
      img: '/images/mobi-250-1.webp',
      catalogUrl: '/catalog/mobi-250',
      reversed: true,
    },
  ];
}
