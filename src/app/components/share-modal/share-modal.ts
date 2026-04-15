import { Component, input, output, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-share-modal',
  imports: [],
  templateUrl: './share-modal.html',
  styleUrl: './share-modal.scss',
})
export class ShareModal {
  url = input.required<string>();
  title = input<string>('');
  closed = output<void>();

  copied = false;
  private doc = inject(DOCUMENT);

  close() { this.closed.emit(); }

  onBackdrop(e: MouseEvent) {
    if ((e.target as HTMLElement).classList.contains('share-modal__backdrop')) {
      this.close();
    }
  }

  copyLink() {
    navigator.clipboard.writeText(this.url()).then(() => {
      this.copied = true;
      setTimeout(() => this.copied = false, 2000);
    });
  }

  shareEmail() {
    this.doc.defaultView!.open(
      `mailto:?subject=${encodeURIComponent(this.title())}&body=${encodeURIComponent(this.url())}`,
      '_blank'
    );
  }

  shareTelegram() {
    this.doc.defaultView!.open(
      `https://t.me/share/url?url=${encodeURIComponent(this.url())}&text=${encodeURIComponent(this.title())}`,
      '_blank'
    );
  }

  shareWhatsApp() {
    this.doc.defaultView!.open(
      `https://wa.me/?text=${encodeURIComponent(this.title() + ' ' + this.url())}`,
      '_blank'
    );
  }

  shareVk() {
    this.doc.defaultView!.open(
      `https://vk.com/share.php?url=${encodeURIComponent(this.url())}`,
      '_blank'
    );
  }

  shareOk() {
    this.doc.defaultView!.open(
      `https://connect.ok.ru/offer?url=${encodeURIComponent(this.url())}`,
      '_blank'
    );
  }
}
