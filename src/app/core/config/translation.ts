import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export const translationOptions = {
  loader: {
    provide: TranslateLoader,
    useFactory: httpLoaderFactory,
    deps: [HttpClient]
  }
};

export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/lang/', '.json');
}
