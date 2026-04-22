import { Component, input, inject, computed, signal, DOCUMENT } from '@angular/core';
import { ShareModal } from '../share-modal/share-modal';

@Component({
  selector: 'app-share-button',
  imports: [ShareModal],
  templateUrl: './share-button.html',
  styleUrl: './share-button.scss',
})
export class ShareButton {
  public url = input<string>('');
  public title = input<string>('');

  private doc = inject(DOCUMENT);
  public open = signal(false);

  public resolvedUrl = computed(() =>
    this.url() || this.doc.location.href
  );
}
