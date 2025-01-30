import { Component, signal } from '@angular/core';
import { SafePipe } from '../../../../../../shared/pipes/safe.pipe';

@Component({
  selector: 'app-join-us-section',
  standalone: true,
  imports: [],
  templateUrl: './join-us-section.component.html',
  styleUrl: './join-us-section.component.scss',
})
export class JoinUsSectionComponent {
  typeId = signal<number>(1);

  setType(id: number) {
    this.typeId.set(id);
  }

  ngOndestroy() {
    this.typeId.set(1);
  }
}
