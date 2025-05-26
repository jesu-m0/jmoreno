import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css',
})
export class ContactMeComponent {
  contactMe: FormGroup;

  loading: boolean = false;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder) {
    this.contactMe = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    this.loading = true;
    this.successMessage = null;
    this.errorMessage = null;

    if (this.contactMe.invalid) {
      this.contactMe.markAllAsTouched();
      this.errorMessage =
        'Oops! There was an issue sending your message. Please double-check your details and try again.';
      return;
    }


    console.log('Contact me:', this.contactMe.value);
    this.successMessage = 'Message sent! A confirmation email has also been sent to your inbox.';
  }
}
