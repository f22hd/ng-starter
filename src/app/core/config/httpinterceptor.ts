import { Injectable } from '@angular/core';
import {
	HttpInterceptor,
	HttpRequest,
	HttpHandler,
	HttpErrorResponse,
} from '@angular/common/http';
import {Constants } from './constants';
import { catchError, finalize } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Injectable({
	providedIn: 'root'
})
export class Interceptor implements HttpInterceptor {
	constructor(
		private loader:LoaderService
	) { }

	intercept(req: HttpRequest<any>, next: HttpHandler) {
	
		let header:any = {
			'api-key': Constants.Headers.API_KEY,
			'api-version': Constants.Headers.API_VERSION,
		};
		
		req = req.clone({setHeaders: header});
		
		// start loading line bar
		this.loader.show();

		return next.handle(req).pipe(
			catchError((res: HttpErrorResponse) => {
				/**
				 * suggest: you can initiate error notification.
				 */
				return throwError(res);
			}),
			finalize(() => this.loader.hide())
		);
	}
}
