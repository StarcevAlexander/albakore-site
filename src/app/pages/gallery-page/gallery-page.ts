import { Component, inject } from '@angular/core';
import { Gallery } from '../../sections/gallery/gallery';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-gallery-page',
  imports: [Gallery],
  template: `<div class="page-offset"><app-gallery></app-gallery></div>`,
  styles: [`.page-offset { padding-top: 70px; }`],
})
export class GalleryPage {
  constructor() {
    inject(MetaService).set({
      title: 'Фотогалерея — измельчители в работе',
      description:
        'Фотографии измельчителей древесины Промсервис в работе. Прицепные рубильные машины МОБИ и МРГ в различных регионах России.',
      keywords: 'фото измельчителей, рубильная машина фото, Моби фото',
    });
  }
}
