import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dealers-page',
  imports: [RouterLink],
  template: `
    <section class="dealers-page">
      <div class="container">
        <span class="section-label">Дилеры</span>
        <h1 class="page-title">Официальные дилеры <em>RubMaster</em></h1>
        <p class="dealers-page__desc">
          Раздел находится в разработке. Для получения контактов дилеров
          обратитесь к нам напрямую.
        </p>
        <a routerLink="/company-contacts" class="btn btn--primary"><span>Написать нам</span></a>
      </div>
    </section>
  `,
  styles: [`
    .dealers-page {
      padding: 148px 0 80px;
      min-height: 60vh;
    }
    .dealers-page__desc {
      margin: 24px 0 40px;
      font-size: 18px;
      color: var(--dark-mid);
      max-width: 560px;
    }
  `],
})
export class DealersPage {}
