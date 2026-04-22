import { Component, input, inject, computed, signal, DOCUMENT } from '@angular/core';
import { ShareModal } from '../share-modal/share-modal';

@Component({
  selector: 'app-share-button',
  imports: [ShareModal],
  templateUrl: './share-button.html',
  styleUrl: './share-button.scss',
})
export class ShareButton {
  public readonly url = input<string>('');
  public readonly title = input<string>('');

  private readonly doc = inject(DOCUMENT);
  public readonly open = signal(false);

  public readonly resolvedUrl = computed(() =>
    this.url() || this.doc.location.href
  );
}
