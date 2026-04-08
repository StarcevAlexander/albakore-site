import { Injectable } from '@angular/core';

export interface BoatModel {
  slug: string;
  name: string;
  img: string;
  length: string;
  capacity: string;
  material: string;
  description?: string;
  specs?: { label: string; value: string }[];
}

@Injectable({ providedIn: 'root' })
export class CatalogService {
  readonly models: BoatModel[] = [
    {
      slug: 'albakore-460',
      name: 'Albakore 460',
      img: '//i.siteapi.org/vmolUUUgcwAK6OPTB-eIO8Qx9X4=/fit-in/424x2000/filters:format(webp):upscale()/s.siteapi.org/fd0650dee05b0a9.ru/cards/tn41f4sgeaswkgww0cosgssws4ggcs',
      length: '4.6 м',
      capacity: '4 чел.',
      material: 'Алюминий',
      description: 'Компактный алюминиевый катер для рыбалки и отдыха на воде. Отличается манёвренностью и простотой управления.',
      specs: [
        { label: 'Длина', value: '4.6 м' },
        { label: 'Ширина', value: '1.9 м' },
        { label: 'Вместимость', value: '4 чел.' },
        { label: 'Материал', value: 'Алюминий' },
        { label: 'Мощность двигателя', value: 'до 40 л.с.' },
        { label: 'Масса', value: '180 кг' },
      ],
    },
    {
      slug: 'albakore-530',
      name: 'Albakore 530',
      img: '//i.siteapi.org/mI3KBkJH4upLcQ490j1BePlYI4s=/fit-in/424x2000/filters:format(webp):upscale()/s.siteapi.org/fd0650dee05b0a9.ru/cards/n3xvg6psblco0scko80o8844gcs84o',
      length: '5.3 м',
      capacity: '5 чел.',
      material: 'Алюминий',
      description: 'Универсальный катер для семейного отдыха и рыбалки. Просторный и устойчивый корпус из морского алюминия.',
      specs: [
        { label: 'Длина', value: '5.3 м' },
        { label: 'Ширина', value: '2.1 м' },
        { label: 'Вместимость', value: '5 чел.' },
        { label: 'Материал', value: 'Алюминий' },
        { label: 'Мощность двигателя', value: 'до 60 л.с.' },
        { label: 'Масса', value: '260 кг' },
      ],
    },
    {
      slug: 'albakore-620',
      name: 'Albakore 620',
      img: '//i.siteapi.org/8sNeOnLcityXl2US1VkDpo3Lg2k=/fit-in/424x2000/filters:format(webp):upscale()/s.siteapi.org/fd0650dee05b0a9.ru/cards/leg5ljjcu00k84o0oc4g0gk84osoks',
      length: '6.2 м',
      capacity: '6 чел.',
      material: 'Алюминий',
      description: 'Комфортный катер среднего класса с развитой палубой и отличными мореходными характеристиками.',
      specs: [
        { label: 'Длина', value: '6.2 м' },
        { label: 'Ширина', value: '2.3 м' },
        { label: 'Вместимость', value: '6 чел.' },
        { label: 'Материал', value: 'Алюминий' },
        { label: 'Мощность двигателя', value: 'до 90 л.с.' },
        { label: 'Масса', value: '380 кг' },
      ],
    },
    {
      slug: 'albakore-780',
      name: 'Albakore 780',
      img: '//i.siteapi.org/YkcTKG-nRlZZzox9vEa_qRAlMvo=/fit-in/656x2000/filters:format(webp):upscale()/s.siteapi.org/fd0650dee05b0a9.ru/horizontal-cards/8pqcdpk241gcoc8o0g44gs4k4s4c0g',
      length: '7.8 м',
      capacity: '8 чел.',
      material: 'Алюминий',
      description: 'Просторный катер класса люкс для длительных походов и активного отдыха большой компанией.',
      specs: [
        { label: 'Длина', value: '7.8 м' },
        { label: 'Ширина', value: '2.6 м' },
        { label: 'Вместимость', value: '8 чел.' },
        { label: 'Материал', value: 'Алюминий' },
        { label: 'Мощность двигателя', value: 'до 150 л.с.' },
        { label: 'Масса', value: '580 кг' },
      ],
    },
    {
      slug: 'albakore-950',
      name: 'Albakore 950',
      img: '//i.siteapi.org/4BMl_xikeOLlLm6u9jTIrXz1Zuc=/fit-in/424x2000/filters:format(webp):upscale()/s.siteapi.org/fd0650dee05b0a9.ru/cards/db2o4tipgagw48ocs4kcgcwcgss4cc',
      length: '9.5 м',
      capacity: '10 чел.',
      material: 'Алюминий',
      description: 'Флагманская модель для серьёзных морских походов. Максимальный комфорт и надёжность в любых условиях.',
      specs: [
        { label: 'Длина', value: '9.5 м' },
        { label: 'Ширина', value: '2.9 м' },
        { label: 'Вместимость', value: '10 чел.' },
        { label: 'Материал', value: 'Алюминий' },
        { label: 'Мощность двигателя', value: 'до 250 л.с.' },
        { label: 'Масса', value: '950 кг' },
      ],
    },
    {
      slug: 'albakore-1150-fly',
      name: 'Albakore 1150 FLY',
      img: '//i.siteapi.org/cmqP38DlawniVtwazaMadFN7r7Q=/fit-in/656x/filters:format(webp):no_upscale()/s.siteapi.org/fd0650dee05b0a9.ru/horizontal-cards/5cx0gj9qvf4ssgogk0oswwkcoogkck',
      length: '11.5 м',
      capacity: '12 чел.',
      material: 'Алюминий',
      description: 'Яхта-катер с флайбриджем. Двухуровневая компоновка, каюта с полным набором удобств для многодневных круизов.',
      specs: [
        { label: 'Длина', value: '11.5 м' },
        { label: 'Ширина', value: '3.4 м' },
        { label: 'Вместимость', value: '12 чел.' },
        { label: 'Материал', value: 'Алюминий' },
        { label: 'Мощность двигателя', value: 'до 2×250 л.с.' },
        { label: 'Масса', value: '1800 кг' },
      ],
    },
  ];

  getBySlug(slug: string): BoatModel | undefined {
    return this.models.find(m => m.slug === slug);
  }
}
