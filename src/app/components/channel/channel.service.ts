import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  ENDPOINT = `${environment.endpointBaseUrl}/api/channels/`

  constructor(private http: HttpClient) {    
  }

  get() {
    return this.http.get<any>(this.ENDPOINT, { withCredentials: true });
  }
}
