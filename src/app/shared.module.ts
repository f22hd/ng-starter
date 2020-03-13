import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { translationOptions } from './core/config/translation';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule.forRoot(translationOptions)
  ],
  exports: [ReactiveFormsModule, FormsModule, TranslateModule]
})
export class SharedModule {}
