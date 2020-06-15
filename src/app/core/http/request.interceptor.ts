import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '@env/environment';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      url: environment.serverUrl + request.url,
      headers: request.headers.set('Authorization', 'Bearer ' + this.getToken())
    });
    return next.handle(request);
  }

  private getToken() {
    const savedCredentials = sessionStorage.getItem('token') || localStorage.getItem('token');
    try {
      return JSON.parse(savedCredentials).token;
    } catch (e) {
      return null;
    }
  }
}
