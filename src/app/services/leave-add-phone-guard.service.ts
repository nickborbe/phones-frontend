import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { NewPhoneComponent } from '../components/new-phone/new-phone.component';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class LeaveAddPhoneGuardService implements CanDeactivate<NewPhoneComponent>  {
  canDeactivate(component: NewPhoneComponent)
  : Observable<boolean> | Promise<boolean> | boolean {

  return component.isFormClean();
}
  constructor() { }

}
