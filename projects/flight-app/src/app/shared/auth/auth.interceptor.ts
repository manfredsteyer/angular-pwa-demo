import { Router } from '@angular/router';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpUserEvent, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Injectable } from '@angular/core';
import { OAuthStorage } from 'angular-oauth2-oidc';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
 
    constructor(
        private oauthStorage: OAuthStorage,
        private router: Router) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.startsWith('http://www.angular.at/api')) {
            const accessToken = this.oauthStorage.getItem('access_token');
            const headers = req.headers.set('Authorization', 'Bearer ' + accessToken);
            req = req.clone({ headers });
        }

        return next.handle(req).pipe(
            // tap(req => { this.doIt(req); }),
            catchError(err => this.handleError(err))
        );
    }
    
    doIt(req:any) {
        console.debug('req', req)
    }

    handleError(err: HttpErrorResponse) {
        if (err.status === 401 || err.status === 403) {
            // "401": unauthorized
            // "403": forbitten
            this.router.navigate(['/home', {needsLogin: true}]);
        }
        return throwError(err);
    }
}