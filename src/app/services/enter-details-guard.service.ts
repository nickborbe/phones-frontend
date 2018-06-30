import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable }  from 'rxjs/Rx';
@Injectable()
export class EnterDetailsGuardService implements CanActivate {
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    console.log('canActivate guard has been called');
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(true), 1000);
    });
  }

  constructor() { }

}
