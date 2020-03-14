import { Injectable } from '@angular/core';
import { LocalDBService } from '../localDB/local-db.service';
import { GlobalKeys } from 'src/app/core/enums/GlobalKeys';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  authedUser;

  constructor() {}

  setUser(user) {
    this.authedUser = user;
  }

  getUser() {
    return this.authedUser;
  }

  clearUser() {
    this.authedUser = null;
    delete this.authedUser;
  }
}
