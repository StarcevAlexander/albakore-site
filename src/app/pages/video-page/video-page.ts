import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface VideoItem {
  url: SafeResourceUrl;
  title: string;
}

// Rutube embed: https://rutube.ru/play/embed/{id}
// Реальный ID получен от клиента — остальные TODO: заменить на реальные
const RUTUBE_BASE = 'https://rutube.ru/play/embed/';

const RAW_VIDEOS = [
  { id: 'e850f5c0eab8f52ef7d07dfa5ec2fa91', title: 'Мобильный измельчитель РубМастер — обзор' },
  { id: 'e850f5c0eab8f52ef7d07dfa5ec2fa91', title: 'Мобильный измельчитель Моби-300' },
  { id: 'e850f5c0eab8f52ef7d07dfa5ec2fa91', title: 'Мобильный измельчитель Моби-250' },
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
