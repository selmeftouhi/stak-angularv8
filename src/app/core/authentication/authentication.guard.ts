import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';


import {Logger} from '@app/core/logger.service';
import {LocalStorageService} from '@app/core/local.storage.service';
import {AuthenticationService} from '@app/core/authentication/authentication.service';
import {environment} from '@env/environment';


const log = new Logger('AuthenticationGuard');

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private localStorageService: LocalStorageService) { }

  canActivate(): boolean {
    if (this.authenticationService.isAuthenticated()) {
      return true;
    }

    log.debug('Not authenticated, redirecting...');
    // remove user from local storage to log user out
    this.localStorageService.removeItem('user');
    this.router.navigate([environment.defaultRoutes.login], {replaceUrl: true});
    return false;
  }

}
