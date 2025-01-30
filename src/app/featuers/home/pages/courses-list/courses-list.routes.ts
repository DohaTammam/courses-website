import { Routes } from '@angular/router';
import { CourseDetailsComponent } from './coponents/course-details/course-details.component';
import { CoursesListComponent } from './courses-list.component';

export const CoursesListRoutes: Routes = [
  {
    path: '',
    component: CoursesListComponent,
  },
  {
    path: 'details/:id',
    component: CourseDetailsComponent,
  },
];
