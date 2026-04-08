import { Component } from '@angular/core';
import { About } from '../../sections/about/about';

@Component({
  selector: 'app-about-page',
  imports: [About],
  template: `<div class="page-offset"><app-about></app-about></div>`,
  styles: [`.page-offset { padding-top: 70px; }`],
})
export class AboutPage {}
