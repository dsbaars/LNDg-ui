import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  ENDPOINT = `${environment.endpointBaseUrl}/api/payments/`

  constructor(private http: HttpClient) {    
  }

  get() {
    return this.http.get<any>(this.ENDPOINT, { withCredentials: true });
  }
}
