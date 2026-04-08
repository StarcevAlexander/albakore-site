import { Component } from '@angular/core';
import { Gallery } from '../../sections/gallery/gallery';

@Component({
  selector: 'app-gallery-page',
  imports: [Gallery],
  template: `<app-gallery></app-gallery>`,
})
export class GalleryPage {}
