import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./screens/landing-page/landing-page.module').then(m => m.LandingPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./screens/auth-page/auth-page.module').then(m => m.AuthPageModule)
  },
  {
    path: 'request',
    loadChildren: () =>
      import('./screens/request-vendor-page/request-vendor-page.module').then(
        m => m.RequestVendorPageModule
      )
  },
  {
    path: 'portal',
    loadChildren: () => import('./screens/portal/home/home.module').then(m => m.HomeModule)
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '**',
    loadChildren: () =>
      import('./screens/not-found-page/not-found-page.module').then(m => m.NotFoundPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
