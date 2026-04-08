import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface VideoItem {
  url: SafeResourceUrl;
  title: string;
}

// Rutube embed: https://rutube.ru/play/embed/{id}
// TODO: заменить ID на реальные из канала @rubmastermobi
const RUTUBE_BASE = 'https://rutube.ru/play/embed/';

const RAW_VIDEOS = [
  { id: 'de5e91b8e35e54e5b9ef8c099fde6be0', title: 'Мобильный измельчитель Моби-250 — запуск в Геленджике' },
  { id: 'de5e91b8e35e54e5b9ef8c099fde6be0', title: 'Мобильный измельчитель Моби-251 — доставка в Белгород' },
  { id: 'de5e91b8e35e54e5b9ef8c099fde6be0', title: 'Мобильный измельчитель Моби-160' },
  { id: 'de5e91b8e35e54e5b9ef8c099fde6be0', title: 'Мобильный измельчитель Моби-200' },
  { id: 'de5e91b8e35e54e5b9ef8c099fde6be0', title: 'Мобильный измельчитель Моби-300' },
  { id: 'de5e91b8e35e54e5b9ef8c099fde6be0', title: 'Стационарный измельчитель МРГ-300Е' },
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
    url: this.sanitizer.bypassSecurityTrustResourceUrl(RUTUBE_BASE + v.id),
  }));
}
