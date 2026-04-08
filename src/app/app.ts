import { Component } from '@angular/core';
import { Header } from './header/header';
import { HeroSlider } from './sections/hero-slider/hero-slider';
import { HeroProducts } from './sections/hero-products/hero-products';
import { Gallery } from './sections/gallery/gallery';
import { Video } from './sections/video/video';
import { CtaBlock } from './sections/cta-block/cta-block';
import { Catalog } from './sections/catalog/catalog';
import { About } from './sections/about/about';
import { ContactForm } from './sections/contact-form/contact-form';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    HeroSlider,
    HeroProducts,
    Gallery,
    Video,
    CtaBlock,
    Catalog,
    About,
    ContactForm,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
