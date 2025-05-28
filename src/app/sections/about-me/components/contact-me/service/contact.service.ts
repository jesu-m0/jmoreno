// src/app/sections/contact-me/contact.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../model/contact.model';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private endpoint = '/api/send-email';

  constructor(private http: HttpClient) {}

  send(formData: Contact): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(this.endpoint, formData);
  }
}
