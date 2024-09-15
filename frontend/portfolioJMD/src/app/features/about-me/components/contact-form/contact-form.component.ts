import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})


export class ContactFormComponent {

  loading: boolean = false;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private http: HttpClient) { }

  public sendEmail(event: Event) {
    event.preventDefault(); // Prevent default form behavior

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    // Convert FormData to a JSON object
    const data: any = {};
    formData.forEach((value, key) => (data[key] = value));

    this.loading = true;
    this.successMessage = null;
    this.errorMessage = null;

    // Make a POST request to the serverless function
    this.http.post('/api/sendMail', data)
      .subscribe({
        next: (response) => {
          this.loading = false;
          this.successMessage = "Message sent! A confirmation email has also been sent to your inbox.";
          console.log('Emails sent successfully', response);
          form.reset();
        },
        error: (error) => {
          this.loading = false;
          this.errorMessage = 'Oops! There was an issue sending your message. Please double-check your details and try again.';
          console.error('Error sending emails', error);
        }
      });
  }
}
