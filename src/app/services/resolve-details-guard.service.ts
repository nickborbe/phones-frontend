// import { Observable } from 'rxjs/Rx';
// import { Injectable } from '@angular/core';
// import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
// import { PhoneService } from '../services/phone.service';

// @Injectable()
// export class ResolveDetailsGuardService implements Resolve<any>{

//   constructor(
//     private phoneService: PhoneService,
//     private router: Router
//   ) {}

//   // I have to switch .getId from Promise to Observable if I want this Resolve part to work

//   resolve(route: ActivatedRouteSnapshot): Observable<any> {
//     return this.phoneService.getId(route.params['id'])
//       .catch((err) => {
//         this.router.navigate(['/']);
//         return Observable.of(err);
//       });
// }
// }
