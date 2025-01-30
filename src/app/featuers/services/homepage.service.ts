import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Banner, Category, Course } from '../../shared/interfaces/homepage';

@Injectable({
  providedIn: 'root',
})
export class HomepageService {
  private http = inject(HttpClient);

  getCategories() {
    return this.http
      .get<{ Categories: Category[] }>(environment.categoriesAPI)
      .pipe();
  }
  getCourses() {
    return this.http.get<{ Courses: Course[] }>(environment.coursesApi).pipe();
  }
  getBanners() {
    return this.http.get<{ banners: Banner[] }>(environment.bannersApi).pipe();
  }
}
