import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PartnerCard } from '../../components/partner-card/partner-card';
import { MetaService } from '../../services/meta.service';

interface Step {
  num: number;
  title: string;
  desc: string;
}

interface Benefit {
  icon: string;
  title: string;
  desc: string;
}

interface Phone {
  label: string;
  href: string;
}

interface Partner {
  name: string;
  city: string;
  address: string;
  phones: Phone[];
}

@Component({
  selector: 'app-installment-page',
  imports: [RouterLink, PartnerCard],
  templateUrl: './installment-page.html',
  styleUrl: './installment-page.scss',
})
export class InstallmentPage {
  constructor() {
    inject(MetaService).set({
      title: 'Рассрочка на измельчители древесины',
      description:
        'Приобретайте измельчители древесины Промсервис в рассрочку без банков и скрытых комиссий. Фиксированная цена в рублях, индивидуальный график платежей.',
      keywords: 'рассрочка измельчитель, купить рубильную машину в рассрочку',
    });
  }

  readonly steps: Step[] = [
    {
      num: 1,
      title: 'Выбор техники',
      desc: 'Выбираете интересующую модель и согласовываете итоговую стоимость с менеджером отдела продаж.',
    },
    {
      num: 2,
      title: 'Заявка',
      desc: 'Заполняете краткое Заявление на предоставление рассрочки — в офисе компании или онлайн.',
    },
    {
      num: 3,
      title: 'Договор',
      desc: 'Подписываете Договор с утверждённым индивидуальным графиком ежемесячных платежей.',
    },
    {
      num: 4,
      title: 'Получение',
      desc: 'Получаете технику сразу после подписания документов и внесения первого платежа (при наличии).',
    },
  ];

  readonly benefits: Benefit[] = [
    {
      icon: '💼',
      title: 'Сохранение оборотных средств',
      desc: 'Получаете необходимое оборудование сейчас, оплачивая его постепенно из будущей прибыли.',
    },
    {
      icon: '📌',
      title: 'Фиксация цены',
      desc: 'Стоимость техники фиксируется в рублях на весь срок договора и не изменяется в одностороннем порядке.',
    },
    {
      icon: '✅',
      title: 'Прозрачность',
      desc: 'Никаких скрытых комиссий, страховок и дополнительных услуг, навязываемых банками-партнёрами.',
    },
  ];

  readonly partners: Partner[] = [
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
        { label: '8-812-640-86-40', href: 'tel:+78126408640' },
        { label: '8-812-372-66-25', href: 'tel:+78123726625' },
      ],
    },
  ];
}
