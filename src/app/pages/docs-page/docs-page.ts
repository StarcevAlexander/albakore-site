import { Component, inject } from '@angular/core';
import { MetaService } from '../../services/meta.service';

interface DocItem {
  title: string;
  desc: string;
  type: string;
  file: string;
}

@Component({
  selector: 'app-docs-page',
  templateUrl: './docs-page.html',
  styleUrl: './docs-page.scss',
})
export class DocsPage {
  constructor() {
    inject(MetaService).set({
      title: 'Документация и паспорта на измельчители',
      description: 'Технические паспорта, инструкции по эксплуатации и сертификаты на измельчители древесины Промимпорт. Скачайте документацию онлайн.',
      keywords: 'паспорт измельчителя, документация рубильная машина, инструкция Моби',
    });
  }

  readonly docs: DocItem[] = [
    {
      title: 'Декларация ТР ТС',
      desc: 'Декларация о соответствии требованиям технических регламентов Таможенного союза.',
      type: 'Сертификация',
      file: '/docs/deklaraciya-tr-ts.pdf',
    },
    {
      title: 'Карта смазки измельчителя Моби-250',
      desc: 'Схема и регламент смазки узлов измельчителя древесины Моби-250.',
      type: 'Техническая документация',
      file: '/docs/karta-smazki-mobi-250.pdf',
    },
    {
      title: 'Условия гарантии',
      desc: 'Гарантийные обязательства производителя, порядок обращения и условия обслуживания.',
      type: 'Гарантия',
      file: '/docs/usloviya-garantii.pdf',
    },
  ];

  openDoc(file: string) {
    window.open(file, '_blank', 'noopener');
  }
}
