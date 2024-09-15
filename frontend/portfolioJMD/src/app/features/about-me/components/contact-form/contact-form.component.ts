import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient  } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    FormsModule, 
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css' 
})


export class ContactFormComponent {
  constructor(private http: HttpClient) {}

  public sendEmail(event: Event) {
    event.preventDefault(); // Prevent default form behavior

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    // Convert FormData to a JSON object
    const data: any = {};
    formData.forEach((value, key) => (data[key] = value));

    // Make a POST request to the serverless function
    this.http.post('/api/sendMail', data)
      .subscribe({
        next: (response) => {
          console.log('Emails sent successfully', response);
        },
        error: (error) => {
          console.error('Error sending emails', error);
        }
      });
  }
}
