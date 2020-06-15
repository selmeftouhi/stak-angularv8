import {Injectable, Inject, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(@Inject(PLATFORM_ID) protected platformId: object) {
  }

  setItem(key: string, value: any) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));
    }
  }

  getItem(key: string) {
    if (isPlatformBrowser(this.platformId)) {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    }
  }

  removeItem(key: string) {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.removeItem(key);
    }
  }

}
