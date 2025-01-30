import { Component, inject } from '@angular/core';
import { CoursesComponent } from './components/courses section/courses.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { homepageStore } from '../../../store/homepage.store';
import { JoinUsSectionComponent } from './components/join-us-section/join-us-section.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CoursesComponent, HeroSectionComponent, JoinUsSectionComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  homePageStore = inject(homepageStore);

  ngOnInit() {
    this.homePageStore.getBannerById(0);
  }
}
