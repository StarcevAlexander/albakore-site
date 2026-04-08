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
      desc: 'Максимальная мощность и производительность в линейке прицепных измельчителей. Диаметр переработки до 31 см, дизельный двигатель 136–156 л.с., исполнение с диском или барабаном. Система «No Stress» защищает привод от перегрузок.',
      img: 'https://placehold.co/656x480/1a2a3a/fff?text=Моби-300',
      catalogUrl: '/catalog/mobi-300',
      reversed: false,
    },
    {
      badge: 'Стационарная серия',
      title: 'Промышленный измельчитель',
      model: 'МРГ-300Д/Е',
      desc: 'Стационарный измельчитель для постоянного размещения на производстве. Производительность до 40 м³/час по плотному сырью. Два варианта привода: дизельный двигатель или электромотор. Опция — входной конвейер.',
      img: 'https://placehold.co/656x480/1a2a3a/fff?text=МРГ-300',
      catalogUrl: '/catalog/mrg-300',
      reversed: true,
    },
  ];
}
