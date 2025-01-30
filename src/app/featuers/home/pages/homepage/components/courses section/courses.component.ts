import { Component, inject, signal } from '@angular/core';
import { homepageStore } from '../../../../../store/homepage.store';
import { CourseCardComponent } from '../../../courses-list/coponents/course-card/course-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CourseCardComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  homePageStore = inject(homepageStore);
  router = inject(Router);

  ngOnInit() {
    this.homePageStore.getCategories();
    this.homePageStore.getCoursesByCategoryId('0');
  }

  navigateToAllCourses() {
    this.router.navigate(['/courses']);
  }
}
