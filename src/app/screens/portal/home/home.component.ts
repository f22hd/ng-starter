import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/app/user/user.service';
import { Router, NavigationStart } from '@angular/router';
import { LocalDBService } from 'src/app/services/app/localDB/local-db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private userService: UserService,
    private router: Router,
    private localDB: LocalDBService
  ) {}

  ngOnInit(): void {
    const user = this.userService.getUser();
    if (!user) {
      this.router.navigateByUrl('/portal/auth'); // landing page
    }

    // listen to routes and validate it
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (event.url.includes('portal/auth') && this.userService.getUser()) {
          this.router.navigateByUrl('/portal');
        }
      }
    });
  }

  logout() {
    this.userService.clearUser();
    this.localDB.clearAll();
    this.router.navigateByUrl('/portal/auth');
  }
}
