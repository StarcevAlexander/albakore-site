import { Component } from '@angular/core';

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
