import { Injectable } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs";
import {Cookies} from '@cedx/ngx-cookies';

@Injectable()
export class AuthService implements HttpInterceptor  {

constructor(private cookies: Cookies) { }

intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
const modified = req.clone({setHeaders: {'authorization': 'Bearer ' +this.cookies.getObject('user', false).token}});
return next.handle(modified);
}


}

