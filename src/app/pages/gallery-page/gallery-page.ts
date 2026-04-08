import { Component } from '@angular/core';
import { Gallery } from '../../sections/gallery/gallery';

@Component({
  selector: 'app-gallery-page',
  imports: [Gallery],
  template: `<div class="page-offset"><app-gallery></app-gallery></div>`,
  styles: [`.page-offset { padding-top: 70px; }`],
})
export class GalleryPage {}
