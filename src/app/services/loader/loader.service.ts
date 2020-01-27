import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loader = new Subject<Boolean>();
  constructor() {}

  show() {
    this.loader.next(true);
  }

  hide() {
    this.loader.next(false);
  }

  getLoader() {
    return this.loader;
  }
}
