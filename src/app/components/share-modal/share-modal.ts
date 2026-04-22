import { Component, input, output, inject, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-share-modal',
  imports: [],
  templateUrl: './share-modal.html',
  styleUrl: './share-modal.scss',
})
export class ShareModal implements AfterViewInit, OnDestroy {
  url = input.required<string>();
  title = input<string>('');
  closed = output<void>();

  copied = false;
  private doc = inject(DOCUMENT);
  private el = inject(ElementRef);

  ngAfterViewInit() {
    this.doc.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy() {
    const node = this.el.nativeElement as HTMLElement;
    if (node.parentNode === this.doc.body) {
      this.doc.body.removeChild(node);
    }
  }

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
