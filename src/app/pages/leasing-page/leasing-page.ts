import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-leasing-page',
  imports: [RouterLink],
  templateUrl: './leasing-page.html',
  styleUrl: './leasing-page.scss',
})
export class LeasingPage {
  partners = [
    {
      name: 'Сбербанк Лизинг',
      type: 'Банковский лизинг',
      phone: '+7 (800) 555-55-50',
      email: 'leasing@sberbank.ru',
      site: 'sberleasing.ru',
      note: 'Федеральная программа для МСБ. Первый взнос от 10%, срок до 60 мес.',
    },
    {
      name: 'ВТБ Лизинг',
      type: 'Финансовый лизинг',
      phone: '+7 (800) 100-24-24',
      email: 'vtbleasing@vtb.ru',
      site: 'vtbleasing.ru',
      note: 'Специальные условия для сельхозтехники и спецоборудования.',
    },
    {
      name: 'Балтийский лизинг',
      type: 'Оперативный лизинг',
      phone: '+7 (800) 500-55-51',
      email: 'info@bl-leasing.ru',
      site: 'bl-leasing.ru',
      note: 'Быстрое одобрение за 1 день. Работаем с ИП и физическими лицами.',
    },
  ];

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
