import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestVendorFormComponent } from 'src/app/components/auth-forms/request-vendor-form/request-vendor-form.component';
import { RequestVendorPageComponent } from './request-vendor-page.component';
import { SharedModule } from 'src/app/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [RequestVendorPageComponent, RequestVendorFormComponent],
  imports: [CommonModule, SharedModule, TranslateModule.forChild()]
})
export class RequestVendorPageModule {}
