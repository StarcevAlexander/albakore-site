import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PartnerCard, PartnerCardData } from '../../components/partner-card/partner-card';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-dealers-page',
  imports: [RouterLink, PartnerCard],
  templateUrl: './dealers-page.html',
  styleUrl: './dealers-page.scss',
})
export class DealersPage {
  constructor() {
    inject(MetaService).set({
      title: 'Официальные дилеры',
      description:
        'Официальные дилеры измельчителей древесины Промсервис в регионах России. Гарантия производителя, оригинальные запчасти, сервисное обслуживание.',
      keywords: 'дилеры рубильных машин, купить измельчитель регионы, официальный дилер Промсервис',
    });
  }

  public readonly dealers: PartnerCardData[] = [
    {
      name: 'ООО «БОРУС-СТ»',
      city: 'г. Киров',
      address: 'Мелькомбинатовский проезд, 7',
      phones: [
        { label: '8-800-555-96-00', href: 'tel:+78005559600' },
        { label: '8-8332-711-444',  href: 'tel:+78332711444' },
        { label: '8-8332-214-210',  href: 'tel:+78332214210' },
      ],
    },
    {
      name: 'ООО «СК «ПРОМКОМСТРОЙ»»',
      city: 'г. Краснодар',
      address: 'ул. Героев-Разведчиков, д. 42, помещ. 1025',
      phones: [
        { label: '8-918-975-83-54', href: 'tel:+79189758354' },
      ],
    },
    {
      name: 'ООО «СеверТрейд»',
      city: 'г. Санкт-Петербург',
      address: 'Складская ул., дом 6, литер А, офис 1',
      phones: [
        { label: '8-812-988-74-47', href: 'tel:+78129887447' },
        { label: '8-812-372-66-25', href: 'tel:+78123726625' },
      ],
    },
  ];
}
