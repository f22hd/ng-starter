import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { constants } from './constants';
import { catchError, finalize } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Injectable({
  providedIn: 'root'
})
export class Interceptor implements HttpInterceptor {
  constructor(private loader: LoaderService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const header: any = {
      'api-key': constants.Headers.API_KEY,
      'api-version': constants.Headers.API_VERSION
    };

    const preparedReq = req.clone({ setHeaders: header });

    // start loading line bar
    this.loader.show();

    return next.handle(preparedReq).pipe(
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
