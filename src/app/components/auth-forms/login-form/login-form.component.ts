import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http/http.service';
import { constants } from 'src/app/core/config/constants';
import { ApiResponse } from 'src/app/core/types/ApiResponse';
import { LocalDBService } from 'src/app/services/app/localDB/local-db.service';
import { GlobalKeys } from 'src/app/core/enums/GlobalKeys';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/app/user/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private builder: FormBuilder,
    private service: HttpService,
    private localDB: LocalDBService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.builder.group({
      nationalIdOrEmail: new FormControl('4978546', [Validators.required]),
      password: new FormControl('123456', [Validators.required])
    });
  }

  async onSubmit() {
    const obj = {
      identifier: this.loginForm.get('nationalIdOrEmail').value,
      password: this.loginForm.get('password').value
    };

    const url = constants.auth.login;
    const res: ApiResponse = (await this.service
      .sendPostRequest(url, obj)
      .toPromise()) as ApiResponse;
    if (res.isSuccess) {
      const authedUser = res.data.user;
      this.localDB.add(GlobalKeys.USER, authedUser);
      this.userService.setUser(authedUser);
      this.router.navigateByUrl('/portal');
    }
  }

  onForgotPasswordClick() {
    this.router.navigateByUrl('/portal/auth/reset-password');
  }
}
