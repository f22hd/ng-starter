import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalDBService {
  constructor() {}

  add(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  get(key: string) {
    const data = localStorage.getItem(key);
    return data && JSON.parse(data);
  }
}
