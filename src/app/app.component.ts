import { Component, OnChanges, OnInit } from '@angular/core';
import { UserService } from './services/app/user/user.service';
import { LocalDBService } from './services/app/localDB/local-db.service';
import { GlobalKeys } from './core/enums/GlobalKeys';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private authRoutes: string[] = ['auth'];
  constructor(
    private userService: UserService,
    private localDB: LocalDBService,
    private router: Router
  ) {}

  ngOnInit() {
    this.checkAuthenticateUser();
  }

  private checkAuthenticateUser() {
    const user = this.localDB.get(GlobalKeys.USER);
    this.userService.setUser(user);
    if (user) {
      this.router.navigateByUrl('/portal');
    } else {
      this.router.navigateByUrl('/auth');
    }

    // listen to routes and validate it
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (event.url.includes('auth') && this.userService.getUser()) {
          this.router.navigateByUrl('/portal');
        }
      }
    });
  }
}
