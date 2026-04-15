import { Component, inject, signal, DOCUMENT } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CatalogService } from '../../services/catalog.service';
import { ShareModal } from '../../components/share-modal/share-modal';

@Component({
  selector: 'app-catalog',
  imports: [RouterLink, ShareModal],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
})
export class Catalog {
  catalogService = inject(CatalogService);
  private doc = inject(DOCUMENT);
  models = this.catalogService.models;

  shareUrl = signal<string | null>(null);
  shareTitle = signal<string>('');

  openShare(slug: string, name: string) {
    this.shareUrl.set(this.doc.location.origin + '/catalog/' + slug);
    this.shareTitle.set(name);
  }

  closeShare() {
    this.shareUrl.set(null);
  }
}
