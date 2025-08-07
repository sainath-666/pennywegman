import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactForm {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'https://localhost:7075/api/contact'; // Adjust if different

  constructor(private http: HttpClient) {}

  submitContact(form: ContactForm): Observable<any> {
    return this.http.post(this.apiUrl, form);
  }
}
