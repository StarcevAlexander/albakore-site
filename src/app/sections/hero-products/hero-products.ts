import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-products',
  imports: [],
  templateUrl: './hero-products.html',
  styleUrl: './hero-products.scss',
})
export class HeroProducts {
  products = [
    {
      badge: 'Новый флагман',
      title: 'Яхта с флайбриджем',
      model: 'Albakore 1150 FLY',
      desc: 'Откройте для себя новый уровень свободы на воде. Albakore 1150 Fly — это полноценная яхта с двумя каютами, флайбриджем, современным оборудованием и запасом автономности, достойным дальних путешествий.',
      img: '//i.siteapi.org/cmqP38DlawniVtwazaMadFN7r7Q=/fit-in/656x/filters:format(webp):no_upscale()/s.siteapi.org/fd0650dee05b0a9.ru/horizontal-cards/5cx0gj9qvf4ssgogk0oswwkcoogkck',
      catalogUrl: '#catalog',
      reversed: false,
    },
    {
      badge: 'Эксклюзив',
      title: 'Всепогодная Яхта',
      model: 'Albakore 780',
      desc: 'Встречайте яхту, которая перепишет ваши представления о водном отдыхе. Семейные путешествия, адреналиновые приключения или уикенд с друзьями – Albakore 780 готова ко всему.',
      img: '//i.siteapi.org/YkcTKG-nRlZZzox9vEa_qRAlMvo=/fit-in/656x2000/filters:format(webp):upscale()/s.siteapi.org/fd0650dee05b0a9.ru/horizontal-cards/8pqcdpk241gcoc8o0g44gs4k4s4c0g',
      catalogUrl: '#catalog',
      reversed: true,
    },
  ];
}
