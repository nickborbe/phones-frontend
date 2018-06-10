import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from "./components/signup/signup.component";
import { LoginComponent } from "./components/login/login.component";
import { PhonesComponent } from "./components/phones/phones.component";
import { PhoneDetailsComponent } from "./components/phone-details/phone-details.component";
import { NewPhoneComponent } from "./components/new-phone/new-phone.component";
import { EnterDetailsGuardService } from "./services/enter-details-guard.service";
import { LeaveAddPhoneGuardService } from "./services/leave-add-phone-guard.service";
// import { ResolveDetailsGuardService } from "./services/resolve-details-guard.service";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },

  {
    path: "phones",
    component: PhonesComponent
  },
  {
    path: "phones/:id",
    component: PhoneDetailsComponent,
    canActivate: [ EnterDetailsGuardService ],
    // resolve: {
    //   phone: ResolveDetailsGuardService
    // }
  },
  {
    path: "add-phone",
    component: NewPhoneComponent,
    canDeactivate: [ LeaveAddPhoneGuardService ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
