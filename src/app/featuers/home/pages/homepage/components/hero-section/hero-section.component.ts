import {
  Component,
  effect,
  ElementRef,
  inject,
  viewChild,
} from '@angular/core';
import { homepageStore } from '../../../../../store/homepage.store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  homePageStore = inject(homepageStore);

  colorContainerRef = viewChild<ElementRef<HTMLSpanElement>>('colorContainer');
  constructor() {
    effect(() => {
      this.colorContainerRef()?.nativeElement.style.setProperty(
        '--color',
        '#' + this.homePageStore.selectedBanner()?.colorCode!
      );
    });
  }
}
