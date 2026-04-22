import { Component } from '@angular/core';

interface ClientCase {
  img: string;
  model: string;
  location: string;
  year: number;
}

@Component({
  selector: 'app-clients-preview',
  templateUrl: './clients-preview.html',
  styleUrl: './clients-preview.scss',
})
export class ClientsPreview {
  public readonly cases: ClientCase[] = [
    { img: '/images/clients/client-1.webp', model: 'Моби-200',  location: 'В/ч Московская область', year: 2019 },
    { img: '/images/clients/client-2.webp', model: 'Моби-250',  location: 'РЖД, г. Ярославль',      year: 2019 },
    { img: '/images/clients/client-3.webp', model: 'МРГ-250',   location: 'г. Камешково',            year: 2015 },
    { img: '/images/clients/client-4.webp', model: 'МРГ-250',   location: 'г. Каменск-Уральский',   year: 2015 },
    { img: '/images/clients/client-5.webp', model: 'МРГ-250Е',  location: 'г. Ташкент',             year: 2014 },
    { img: '/images/clients/client-6.webp', model: 'Моби-300',  location: 'г. Пермь',               year: 2020 },
  ];
}
