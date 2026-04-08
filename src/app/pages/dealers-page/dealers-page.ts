import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Dealer {
  name: string;
  city: string;
  region: string;
  phone: string;
  email: string;
  address: string;
  hours: string;
}

@Component({
  selector: 'app-dealers-page',
  imports: [RouterLink],
  template: `
    <section class="dealers-page">
      <div class="container">
        <h1 class="page-title">Официальные дилеры <em class="rm-brand"><span class="rm-rub">RUB</span><span class="rm-master">MASTER</span></em></h1>
        <p class="dealers-page__lead">
          Приобретайте технику RubMaster у официальных дилеров в вашем регионе.
          Гарантия производителя, оригинальные запчасти, сервисное обслуживание.
        </p>

        <div class="dealers-grid">
          @for (dealer of dealers; track dealer.name) {
            <div class="dealer-card">
              <div class="dealer-card__header">
                <h3 class="dealer-card__name">{{ dealer.name }}</h3>
                <span class="dealer-card__region">{{ dealer.region }}</span>
              </div>
              <ul class="dealer-card__info">
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  {{ dealer.address }}
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 17.18z"/></svg>
                  <a [href]="'tel:' + dealer.phone.replace(/\\D/g, '')">{{ dealer.phone }}</a>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <a [href]="'mailto:' + dealer.email">{{ dealer.email }}</a>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  {{ dealer.hours }}
                </li>
              </ul>
            </div>
          }
        </div>

        <div class="dealers-page__cta">
          <p>Хотите стать официальным дилером RubMaster?</p>
          <a routerLink="/company-contacts" class="btn btn--primary"><span>Связаться с нами</span></a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .dealers-page {
      padding: 148px 0 80px;
      min-height: 60vh;
    }
    .dealers-page__lead {
      margin: 16px 0 48px;
      font-size: 17px;
      color: var(--dark-mid);
      max-width: 620px;
      line-height: 1.6;
    }
    .dealers-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      margin-bottom: 56px;
      @media (max-width: 900px) { grid-template-columns: 1fr 1fr; }
      @media (max-width: 580px) { grid-template-columns: 1fr; }
    }
    .dealer-card {
      border: 1px solid rgba(10,21,40,0.1);
      border-radius: 12px;
      padding: 24px;
      background: #fff;
      box-shadow: 0 2px 12px rgba(10,21,40,0.06);
    }
    .dealer-card__header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 8px;
      margin-bottom: 16px;
      padding-bottom: 16px;
      border-bottom: 1px solid rgba(10,21,40,0.08);
    }
    .dealer-card__name {
      font-size: 16px;
      font-weight: 700;
      color: var(--dark);
      line-height: 1.3;
    }
    .dealer-card__region {
      font-size: 12px;
      font-weight: 600;
      color: var(--red);
      background: rgba(226,17,52,0.08);
      padding: 3px 8px;
      border-radius: 20px;
      white-space: nowrap;
    }
    .dealer-card__info {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .dealer-card__info li {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      font-size: 14px;
      color: var(--dark-mid);
      line-height: 1.4;
    }
    .dealer-card__info svg {
      flex-shrink: 0;
      margin-top: 1px;
      color: var(--red);
    }
    .dealer-card__info a {
      color: var(--dark);
      text-decoration: none;
      &:hover { color: var(--red); }
    }
    .dealers-page__cta {
      display: flex;
      align-items: center;
      gap: 24px;
      padding: 32px;
      background: var(--light-bg);
      border-radius: 12px;
    }
    .dealers-page__cta p {
      font-size: 17px;
      font-weight: 600;
      color: var(--dark);
    }
  `],
})
export class DealersPage {
  dealers: Dealer[] = [
    {
      name: 'ООО «ЛесТехМаш»',
      city: 'Москва',
      region: 'Москва и МО',
      phone: '+7 (495) 123-45-67',
      email: 'info@lestexmash.ru',
      address: 'г. Москва, ул. Промышленная, 12, стр. 3',
      hours: 'Пн–Пт: 9:00–18:00',
    },
    {
      name: 'ИП Соколов А.В.',
      city: 'Екатеринбург',
      region: 'Урал',
      phone: '+7 (343) 987-65-43',
      email: 'sokolov-agro@mail.ru',
      address: 'г. Екатеринбург, ул. Завокзальная, 8',
      hours: 'Пн–Пт: 8:00–17:00, Сб: 9:00–14:00',
    },
    {
      name: 'ООО «АгроТехника Юг»',
      city: 'Краснодар',
      region: 'Краснодарский край',
      phone: '+7 (861) 234-56-78',
      email: 'agro-yug@agrotex.ru',
      address: 'г. Краснодар, ул. Северная, 445',
      hours: 'Пн–Пт: 9:00–18:00',
    },
  ];
}
