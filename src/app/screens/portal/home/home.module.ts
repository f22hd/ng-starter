import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('../auth-page/auth-page.module').then(m => m.AuthPageModule)
  }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)]
})
export class HomeModule {}
