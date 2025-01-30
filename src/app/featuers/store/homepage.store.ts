import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Banner, Category, Course } from '../../shared/interfaces/homepage';
import { inject } from '@angular/core';
import { HomepageService } from '../services/homepage.service';
import { lastValueFrom } from 'rxjs';

interface state {
  banners: Banner[] | null;
  categories: Category[] | null;
  courses: Course[] | null;
  selectedCourse: Course | null;
  selectedBanner: Banner | null;
  error: any | null;
}

const initialState: state = {
  banners: null,
  categories: null,
  courses: null,
  selectedCourse: null,
  selectedBanner: null,
  error: null,
};

export const homepageStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed((store) => ({
    computedBanners: store.banners,
    computedCategories: store.categories,
    computedCourses: store.courses,
    computedError: store.error,
  })),
  withMethods((store, homePageService = inject(HomepageService)) => ({
    async getCategories() {
      const categories$ = homePageService.getCategories();
      try {
        const categories = await lastValueFrom(categories$);
        patchState(store, { categories: categories.Categories });
      } catch (error) {
        patchState(store, { error });
      }
    },
    async getCoursesByCategoryId(id: string) {
      const courses$ = homePageService.getCourses();
      try {
        const courses = await lastValueFrom(courses$);
        if (id == '0') {
          const filterdCourses = courses.Courses.filter(
            (course: Course) => course.showOnHomepage
          );
          patchState(store, { courses: filterdCourses });
        } else {
          const filterdCourses = courses.Courses.filter(
            (course: Course) => course.categoryID === Number(id)
          );

          patchState(store, { courses: filterdCourses });
        }
      } catch (error) {
        patchState(store, { error });
      }
    },
    async getCourseByName(courseName: string) {
      const courses$ = homePageService.getCourses();
      try {
        if (courseName === '') {
          this.getCourses();
        } else {
          const courses = await lastValueFrom(courses$);
          const filterdCourses = courses.Courses.filter((course: Course) =>
            course.title
              .toLocaleLowerCase()
              .includes(courseName.toLocaleLowerCase())
          );
          patchState(store, { courses: filterdCourses });
        }
      } catch (error) {
        patchState(store, { error });
      }
    },
    async getCourseById(id: string) {
      const selectedCourse$ = homePageService.getCourses();
      try {
        const selectedCourse = await lastValueFrom(selectedCourse$);
        const selectedCourseVal = selectedCourse.Courses.find(
          (course: Course) => course.id === id
        );
        patchState(store, { selectedCourse: selectedCourseVal });
      } catch (error) {
        patchState(store, { error });
      }
    },
    async getCourses() {
      const courses$ = homePageService.getCourses();
      try {
        const courses = await lastValueFrom(courses$);
        patchState(store, { courses: courses.Courses });
      } catch (error) {
        patchState(store, { error });
      }
    },
    async getBanners() {
      const banners$ = homePageService.getBanners();
      try {
        const banners = await lastValueFrom(banners$);
        patchState(store, { banners: banners.banners });
      } catch (error) {
        patchState(store, { error });
      }
    },
    async getBannerById(id: number) {
      const selectedBanner$ = homePageService.getBanners();
      try {
        const selectedBanner = await lastValueFrom(selectedBanner$);
        const selectedBannerVal = selectedBanner.banners.find(
          (banner: Banner) => banner.id === id
        );
        patchState(store, { selectedBanner: selectedBannerVal });
      } catch (error) {
        patchState(store, { error });
      }
    },
  }))
);
