import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';

@Injectable()
export class CatchErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';

    if (error.status == 204) {
      errorMessage = "(" + error.status + ") --> NoContent.";
    }
    else if(error.status == 400){
      errorMessage = "(" + error.status + ") --> BadRequest";
    }
    else if(error.status == 401){
      errorMessage = "(" + error.status + ") --> Unauthorized";
    }
    else if(error.status == 404){
      errorMessage = "(" + error.status + ") --> Not found";
    } 
    else if(error.status == 500){
      errorMessage = "(" + error.status + ") --> Internal server error";
    }
    else{
      errorMessage = "(" + error.status + ") --> Fatal error";
    }

    return throwError(() => new Error(errorMessage));
  }
}
