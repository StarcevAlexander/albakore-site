import { Component, input, output, inject, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-share-modal',
  imports: [],
  templateUrl: './share-modal.html',
  styleUrl: './share-modal.scss',
})
export class ShareModal implements AfterViewInit, OnDestroy {
  public readonly url = input.required<string>();
  public readonly title = input<string>('');
  public readonly closed = output<void>();

  public copied = false;
  private readonly doc = inject(DOCUMENT);
  private readonly el = inject(ElementRef);

  ngAfterViewInit() {
    this.doc.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy() {
    const node = this.el.nativeElement as HTMLElement;
    if (node.parentNode === this.doc.body) {
      this.doc.body.removeChild(node);
    }
  }

  public close() { this.closed.emit(); }

  public onBackdrop(e: MouseEvent) {
    if ((e.target as HTMLElement).classList.contains('share-modal__backdrop')) {
      this.close();
    }
  }

  public copyLink() {
    const text = this.url();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text)
        .then(() => this.markCopied())
        .catch(() => this.fallbackCopy(text));
    } else {
      this.fallbackCopy(text);
    }
  }

  private fallbackCopy(text: string) {
    const el = this.doc.createElement('textarea');
    el.value = text;
    el.style.position = 'fixed';
    el.style.opacity = '0';
    this.doc.body.appendChild(el);
    el.focus();
    el.select();
    this.doc.execCommand('copy');
    this.doc.body.removeChild(el);
    this.markCopied();
  }

  private markCopied() {
    this.copied = true;
    setTimeout(() => this.copied = false, 2000);
  }

  public shareEmail() {
    this.doc.defaultView!.open(
      `mailto:?subject=${encodeURIComponent(this.title())}&body=${encodeURIComponent(this.url())}`,
      '_blank'
    );
  }

  public shareTelegram() {
    this.doc.defaultView!.open(
      `https://t.me/share/url?url=${encodeURIComponent(this.url())}&text=${encodeURIComponent(this.title())}`,
      '_blank'
    );
  }

  public shareWhatsApp() {
    this.doc.defaultView!.open(
      `https://wa.me/?text=${encodeURIComponent(this.title() + ' ' + this.url())}`,
      '_blank'
    );
  }

  public shareVk() {
    this.doc.defaultView!.open(
      `https://vk.com/share.php?url=${encodeURIComponent(this.url())}`,
      '_blank'
    );
  }

  public shareOk() {
    this.doc.defaultView!.open(
      `https://connect.ok.ru/offer?url=${encodeURIComponent(this.url())}`,
      '_blank'
    );
  }
}
