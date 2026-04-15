import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface VideoItem {
  url: SafeResourceUrl;
  title: string;
}

const RAW_VIDEOS = [
  {
    embed: 'https://rutube.ru/play/embed/92edd42ced0deb86d1cc3a1cc0cbb7a8/?p=VPWGyyJDRDdURHgoakTz_Q',
    title: 'Измельчитель РубМастер — видеообзор',
  },
  {
    embed: 'https://rutube.ru/play/embed/906a3399f311c61de1c70cf95a546626/',
    title: 'Мобильный измельчитель Моби в работе',
  },
  {
    embed: 'https://rutube.ru/play/embed/0e47de4bfe21cd642dac7b70bd1fd187/',
    title: 'Техника РубМастер на объекте',
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

  videos: VideoItem[] = RAW_VIDEOS.map(v => ({
    title: v.title,
    url: this.sanitizer.bypassSecurityTrustResourceUrl(v.embed),
  }));
}
