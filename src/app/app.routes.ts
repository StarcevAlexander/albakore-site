import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'catalog',
    loadComponent: () => import('./pages/catalog-page/catalog-page').then(m => m.CatalogPage),
  },
  {
    path: 'catalog/:slug',
    loadComponent: () => import('./pages/product-detail/product-detail').then(m => m.ProductDetail),
  },
  {
    path: 'docs',
    loadComponent: () => import('./pages/docs-page/docs-page').then(m => m.DocsPage),
  },
  {
    path: 'installment',
    loadComponent: () => import('./pages/installment-page/installment-page').then(m => m.InstallmentPage),
  },
  {
    path: 'video',
    loadComponent: () => import('./pages/video-page/video-page').then(m => m.VideoPage),
  },
  {
    path: 'gallery',
    loadComponent: () => import('./pages/gallery-page/gallery-page').then(m => m.GalleryPage),
  },
  {
    path: 'service',
    loadComponent: () => import('./pages/service-page/service-page').then(m => m.ServicePage),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about-page/about-page').then(m => m.AboutPage),
  },
  {
    path: 'dealers',
    loadComponent: () => import('./pages/dealers-page/dealers-page').then(m => m.DealersPage),
  },
  {
    path: 'contacts',
    loadComponent: () => import('./pages/contacts-page/contacts-page').then(m => m.ContactsPage),
  },
  {
    path: 'company-contacts',
    loadComponent: () => import('./pages/company-contacts-page/company-contacts-page').then(m => m.CompanyContactsPage),
  },
  {
    path: 'terms',
    loadComponent: () => import('./pages/terms-page/terms-page').then(m => m.TermsPage),
  },
  {
    path: 'privacy',
    loadComponent: () => import('./pages/privacy-page/privacy-page').then(m => m.PrivacyPage),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
