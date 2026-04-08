import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-leasing-page',
  imports: [RouterLink],
  templateUrl: './leasing-page.html',
  styleUrl: './leasing-page.scss',
})
export class LeasingPage {
  benefits = [
    { title: 'Первоначальный взнос', value: 'от 10%' },
    { title: 'Срок лизинга', value: 'до 5 лет' },
    { title: 'Ставка', value: 'от 5.9% годовых' },
    { title: 'Решение', value: 'за 1 рабочий день' },
  ];

  steps = [
    { num: '01', title: 'Выберите модель', desc: 'Подберите измельчитель из каталога или обратитесь к менеджеру для подбора под ваши задачи.' },
    { num: '02', title: 'Заявка', desc: 'Заполните форму или позвоните нам. Подготовим коммерческое предложение в течение 24 часов.' },
    { num: '03', title: 'Одобрение', desc: 'Согласуем условия с лизинговой компанией-партнёром. Минимум документов для юрлиц и ИП.' },
    { num: '04', title: 'Получение', desc: 'Подписание договора и передача машины. Обучение оператора на месте включено в сервис.' },
  ];
}
