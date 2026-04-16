import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PartnerCard, PartnerCardData } from '../../components/partner-card/partner-card';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-dealers-page',
  imports: [RouterLink, PartnerCard],
  template: `
    <section class="dealers-page">
      <div class="container">
        <h1 class="page-title">Официальные дилеры <em class="rm-brand"><span class="rm-rub">РУБ</span><span class="rm-master">МАСТЕР</span></em></h1>
        <p class="dealers-page__subtitle">
          Официальные дилеры по реализации измельчителей древесины линейки РубМастер
        </p>
        <p class="dealers-page__lead">
          Приобретайте технику РубМастер у официальных дилеров в вашем регионе.
          Гарантия производителя, оригинальные запчасти, сервисное обслуживание.
        </p>

        <div class="dealers-page__grid">
          @for (dealer of dealers; track dealer.name) {
            <app-partner-card [partner]="dealer" />
          }
        </div>

        <div class="dealers-page__cta">
          <p>Хотите стать официальным дилером по продажам измельчителей древесины <em class="rm-brand"><span class="rm-rub">РУБ</span><span class="rm-master">МАСТЕР</span></em>?</p>
          <a routerLink="/company-contacts" class="btn btn--primary"><span>Связаться с нами</span></a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .dealers-page {
      padding: 148px 0 80px;
      background: var(--light-bg);
      min-height: 60vh;
    }
    .dealers-page__subtitle {
      margin: 12px 0 8px;
      font-size: 15px;
      font-weight: 600;
      color: var(--dark-mid);
      max-width: 640px;
    }
    .dealers-page__lead {
      margin: 0 0 48px;
      font-size: 15px;
      color: var(--dark-mid);
      max-width: 640px;
      line-height: 1.6;
    }
    .dealers-page__grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      margin-bottom: 56px;
      @media (max-width: 900px) { grid-template-columns: 1fr; }
    }
    .dealers-page__cta {
      display: flex;
      align-items: center;
      gap: 32px;
      padding: 40px 48px;
      background: var(--dark);
      border-radius: 20px;

      p {
        flex: 1;
        font-size: 18px;
        color: #fff;
        font-weight: 600;
      }

      @media (max-width: 700px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;
        padding: 28px 24px;
      }
    }
  `],
})
export class DealersPage {
  constructor() {
    inject(MetaService).set({
      title: 'Официальные дилеры',
      description: 'Официальные дилеры измельчителей древесины Промимпорт в регионах России. Гарантия производителя, оригинальные запчасти, сервисное обслуживание.',
      keywords: 'дилеры рубильных машин, купить измельчитель регионы, официальный дилер Промимпорт',
    });
  }

  dealers: PartnerCardData[] = [
    {
      name: 'ООО «БОРУС-СТ»',
      city: 'г. Киров',
      address: 'Мелькомбинатовский проезд, 7',
      phones: [
        { label: '8-800-555-96-00', href: 'tel:88005559600' },
        { label: '8-8332-711-444',  href: 'tel:88332711444' },
        { label: '8-8332-214-210',  href: 'tel:88332214210' },
      ],
    },
    {
      name: 'ООО «СК «ПРОМКОМСТРОЙ»»',
      city: 'г. Краснодар',
      address: 'ул. Героев-Разведчиков, д. 42, помещ. 1025',
      phones: [
        { label: '8-918-975-83-54', href: 'tel:89189758354' },
      ],
    },
    {
      name: 'ООО «СеверТрейд»',
      city: 'г. Санкт-Петербург',
      address: 'Складская ул., дом 6, литер А, офис 1',
      phones: [
        { label: '8-812-640-86-40', href: 'tel:88126408640' },
        { label: '8-812-372-66-25', href: 'tel:88123726625' },
      ],
    },
  ];
}
