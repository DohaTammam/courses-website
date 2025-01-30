import { Component, inject, Input } from '@angular/core';
import { Course } from '../../../../../../shared/interfaces/homepage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss',
})
export class CourseCardComponent {
  @Input() course!: Course;
  router = inject(Router);
  starRates = [1, 2, 3, 4, 5];

  viewDetails(id: string) {
    this.router.navigate([`/courses/details/${id}`]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
