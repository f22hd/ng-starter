import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  constructor(private http: HttpClient) {}

  sendPostRequest(url: string, data) {
    return this.http.post(url, data);
  }

  sendGetRequest(url: string, data) {
    return this.http.get(url, data);
  }

  sendPutRequest(url: string, data) {
    return this.http.put(url, data);
  }

  sendDeleteRequest(url: string, data) {
    return this.http.delete(url, data);
  }
}
