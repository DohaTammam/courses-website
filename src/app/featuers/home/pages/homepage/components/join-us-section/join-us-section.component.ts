import { Component, signal } from '@angular/core';
import { SafePipe } from '../../../../../../shared/pipes/safe.pipe';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-join-us-section',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './join-us-section.component.html',
  styleUrl: './join-us-section.component.scss',
})
export class JoinUsSectionComponent {
  typeId = signal<number>(1);
  submittedVal = signal<number>(1);

  isStudent: boolean = true;
  studentForm!: FormGroup;
  instructorForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required]],
      college: ['', Validators.required],
      courseCategory: ['', Validators.required],
      courseLevel: ['', Validators.required],
    });

    this.instructorForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required]],
      country: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', [Validators.required, Validators.pattern('^[0-9]{5,6}$')]],
    });
  }
  setType(id: number) {
    this.typeId.set(id);
    this.submittedVal.set(id);
  }

  submitForm() {}

  submitStudentForm() {
    if (this.studentForm.valid) {
      this.typeId.set(3);
    } else {
      this.studentForm.markAllAsTouched();
    }
  }

  submitInstructorForm() {
    if (this.instructorForm.valid) {
      this.typeId.set(3);
    } else {
      this.instructorForm.markAllAsTouched();
    }
  }

  ngOndestroy() {
    this.typeId.set(1);
  }
}
