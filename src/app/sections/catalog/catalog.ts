import { Component, inject, DOCUMENT } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CatalogService } from '../../services/catalog.service';
import { ShareButton } from '../../components/share-button/share-button';
import { InstallmentBadge } from '../../components/installment-badge/installment-badge';

@Component({
  selector: 'app-catalog',
  imports: [RouterLink, ShareButton, InstallmentBadge],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
})
export class Catalog {
  catalogService = inject(CatalogService);
  private doc = inject(DOCUMENT);
  models = this.catalogService.models;

  get shareBaseUrl() {
    return this.doc.location.origin;
  }
}
