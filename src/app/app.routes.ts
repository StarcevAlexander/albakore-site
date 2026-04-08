import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
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
    path: 'leasing',
    loadComponent: () => import('./pages/leasing-page/leasing-page').then(m => m.LeasingPage),
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
    path: '**',
    redirectTo: '',
  },
];
