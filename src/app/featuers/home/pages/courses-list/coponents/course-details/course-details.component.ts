import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { homepageStore } from '../../../../../store/homepage.store';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss',
})
export class CourseDetailsComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  homePageStore = inject(homepageStore);

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.homePageStore.getCourseById(params['id']);
    });
  }

  navigateToHomePage() {
    this.router.navigate(['/']);
  }
}
