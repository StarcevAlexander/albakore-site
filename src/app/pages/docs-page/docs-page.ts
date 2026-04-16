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
      title: 'Технический паспорт Моби-300',
      desc: 'Основные технические характеристики, комплектация и требования к эксплуатации измельчителя Моби-300.',
      type: 'Техническая документация',
      file: '/docs/mobi-300-passport.pdf',
    },
  ];

  openDoc(file: string) {
    window.open(file, '_blank', 'noopener');
  }
}
