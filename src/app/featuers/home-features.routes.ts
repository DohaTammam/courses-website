import { Routes } from '@angular/router';

export const homeFeatureRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home/pages/homepage/homepage.routes').then(
        (m) => m.homepageRoutes
      ),
  },
];
