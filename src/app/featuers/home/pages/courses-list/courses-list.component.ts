import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { homepageStore } from '../../../store/homepage.store';
import { CourseCardComponent } from './coponents/course-card/course-card.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [CourseCardComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.scss',
})
export class CoursesListComponent {
  router = inject(Router);
  homePageStore = inject(homepageStore);
  filterForm: FormGroup = new FormGroup({
    courseName: new FormControl(''),
  });

  ngOnInit() {
    this.homePageStore.getCourses();
  }

  navigateToHomePage() {
    this.router.navigate(['/']);
  }
}
