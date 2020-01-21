import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export const translationOptions = {
	loader: {
		provide: TranslateLoader,
		useFactory: HttpLoaderFactory,
		deps: [HttpClient]
	}
};

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http, './assets/lang/', '.json');
}
