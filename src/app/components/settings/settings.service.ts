import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  ENDPOINT = `${environment.endpointBaseUrl}/api/settings/`

  constructor(private http: HttpClient) {    
  }

  get() {
    return this.http.get<any>(this.ENDPOINT, { withCredentials: true });
  }
}
