import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { GlobalService } from 'src/app/services/global/global.service';
import { constants } from 'src/app/core/config/constants';
import { ApiResponse } from 'src/app/core/types/ApiResponse';
import { LocalDBService } from 'src/app/services/app/localDB/local-db.service';
import { GlobalKeys } from 'src/app/core/enums/GlobalKeys';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private builder: FormBuilder,
    private service: GlobalService,
    private localDB: LocalDBService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.builder.group({
      nationalIdOrEmail: new FormControl('4978546', [Validators.required]),
      password: new FormControl('123456', [Validators.required])
    });
  }

  async onSubmit() {
    const obj = {
      identifier: this.form.get('nationalIdOrEmail').value,
      password: this.form.get('password').value
    };

    const url = constants.auth.login;
    const res: ApiResponse = (await this.service
      .sendPostRequest(url, obj)
      .toPromise()) as ApiResponse;
    if (res.isSuccess) {
      console.log(res.data.user);
      this.localDB.add(GlobalKeys.USER, res.data.user);
      this.router.navigateByUrl('/portal');
    }
  }

  onForgotPasswordClick() {
    this.router.navigateByUrl('/auth/reset-password');
  }
}
