import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout/layout.component';
import { CoursesListComponent } from './featuers/home/pages/courses-list/courses-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./featuers/home-features.routes').then(
            (m) => m.homeFeatureRoutes
          ),
      },
      {
        path: 'courses',
        loadChildren: () =>
          import('./featuers/home/pages/courses-list/courses-list.routes').then(
            (m) => m.CoursesListRoutes
          ),
      },
    ],
  },
];
