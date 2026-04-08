import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface VideoItem {
  url: SafeResourceUrl;
  title: string;
}

@Component({
  selector: 'app-video-page',
  imports: [],
  templateUrl: './video-page.html',
  styleUrl: './video-page.scss',
})
export class VideoPage {
  private sanitizer = inject(DomSanitizer);

  private rawVideos = [
    { id: 'dQw4w9WgXcQ', title: 'Albakore 460 — обзор катера' },
    { id: 'dQw4w9WgXcQ', title: 'Albakore 530 — ходовые испытания' },
    { id: 'dQw4w9WgXcQ', title: 'Albakore 620 — на воде' },
    { id: 'dQw4w9WgXcQ', title: 'Albakore 780 — полный обзор' },
    { id: 'dQw4w9WgXcQ', title: 'Albakore 950 — морской поход' },
    { id: 'dQw4w9WgXcQ', title: 'Albakore 1150 FLY — презентация' },
    { id: 'dQw4w9WgXcQ', title: 'Производство катеров Albakore' },
    { id: 'dQw4w9WgXcQ', title: 'Albakore — рыбалка на Ладоге' },
  ];

  videos: VideoItem[] = this.rawVideos.map(v => ({
    title: v.title,
    url: this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${v.id}`
    ),
  }));
}
