import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MetaService } from '../../services/meta.service';

interface VideoItem {
  url: SafeResourceUrl;
  title: string;
}

const RAW_VIDEOS = [
  {
    embed: 'https://rutube.ru/play/embed/172c3d01789340ca3e3136398db082dc/',
    title: 'Запуск измельчителя древесины Моби-250. г. Геленджик',
  },
  {
    embed: 'https://rutube.ru/play/embed/18428eab010530367677dd97a821d8c4/',
    title: 'Прицепной измельчитель древесины Моби-300',
  },
  {
    embed: 'https://rutube.ru/play/embed/26e2b7b73d3cb92f53fc4dfc66cfc457/',
    title: 'Поставка прицепных измельчителей Моби-251 в Белгородскую область',
  },
  {
    embed: 'https://rutube.ru/play/embed/19c680f51b04086482b640602d5d4827/',
    title: 'Стационарный измельчитель МРГ 300Е',
  },
  {
    embed: 'https://rutube.ru/play/embed/92edd42ced0deb86d1cc3a1cc0cbb7a8/?p=VPWGyyJDRDdURHgoakTz_Q',
    title: 'Измельчитель РубМастер — видеообзор',
  },
  {
    embed: 'https://rutube.ru/play/embed/906a3399f311c61de1c70cf95a546626/',
    title: 'Регулировка зазоров ножей',
  },
  {
    embed: 'https://rutube.ru/play/embed/0e47de4bfe21cd642dac7b70bd1fd187/',
    title: 'Система подачи и зазоры',
  },
  {
    embed: 'https://rutube.ru/play/embed/5b37c099745dc2f6c0a2ac293baa7e87/',
    title: 'Прицепной измельчитель Моби 160 бензиновый двигатель 35 л.с.',
  },
];

@Component({
  selector: 'app-video-page',
  imports: [],
  templateUrl: './video-page.html',
  styleUrl: './video-page.scss',
})
export class VideoPage {
  private sanitizer = inject(DomSanitizer);
  constructor() {
    inject(MetaService).set({
      title: 'Видео — измельчители в работе',
      description: 'Видеообзоры и обучающие ролики по эксплуатации измельчителей древесины Промимпорт. Запуск, регулировка, работа на объектах.',
      keywords: 'видео измельчитель, рубильная машина видео, Моби видео',
    });
  }

  videos: VideoItem[] = RAW_VIDEOS.map(v => ({
    title: v.title,
    url: this.sanitizer.bypassSecurityTrustResourceUrl(v.embed),
  }));
}
