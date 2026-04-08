import { Component } from '@angular/core';
import { About } from '../../sections/about/about';

@Component({
  selector: 'app-about-page',
  imports: [About],
  template: `<app-about></app-about>`,
})
export class AboutPage {}
