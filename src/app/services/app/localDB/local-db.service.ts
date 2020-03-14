import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalDBService {
  constructor() {}

  add(key: string, data: any) {
    sessionStorage.setItem(key, JSON.stringify(data));
  }

  get(key: string) {
    const data = sessionStorage.getItem(key);
    return data && JSON.parse(data);
  }

  clearAll() {
    sessionStorage.clear();
  }
}
