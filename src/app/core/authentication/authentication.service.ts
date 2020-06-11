import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '@app/core/local.storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  login(): void {
  }

  logout(): void {
  }

  isAuthenticated(): boolean {
    return true;
}


}
