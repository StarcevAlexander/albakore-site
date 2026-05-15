import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-video',
  imports: [],
  templateUrl: './video.html',
  styleUrl: './video.scss',
})
export class Video {
  protected readonly playing = signal(false);

  protected play() {
    this.playing.set(true);
  }
}
