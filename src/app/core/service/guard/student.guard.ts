import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from '../security/auth.service';
import {ROLES} from "../../const/constants";
import {inject} from "@angular/core";

export const studentGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.getRole() === ROLES.STUDENT) {
    return true;
  } else {
    router.navigate(["login"]);
    return false;
  }
};
