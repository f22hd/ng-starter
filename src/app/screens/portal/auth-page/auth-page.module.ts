import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageComponent } from './auth-page.component';
import { LoginFormComponent } from 'src/app/components/auth-forms/login-form/login-form.component';
import { RegisterFormComponent } from 'src/app/components/auth-forms/register-form/register-form.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserModule } from '@angular/platform-browser';
import { ForgotPasswordFormComponent } from 'src/app/components/auth-forms/forgot-password-form/forgot-password-form.component';

const routes: Routes = [
  {
    path: '',
    component: AuthPageComponent,
    children: [
      {
        path: 'login',
        component: LoginFormComponent
      },
      {
        path: 'register',
        component: RegisterFormComponent
      },
      {
        path: 'reset-password',
        component: ForgotPasswordFormComponent
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  declarations: [AuthPageComponent, LoginFormComponent, RegisterFormComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes), TranslateModule]
})
export class AuthPageModule {}
