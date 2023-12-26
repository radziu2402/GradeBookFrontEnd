import { Component } from '@angular/core';
import {AuthService} from "../../service/security/auth.service";
import {BaseFormComponent} from "../base-form/base-form.component";
import {UntypedFormBuilder, Validators} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {

  active: string = "login";
  login: string = "";
  password: string = "";

  constructor(private authService: AuthService, private router: Router) {
  }

  submit() {
      if(this.login && this.password) {
        this.authService.login(this.login, this.password).subscribe({
          next: () => this.router.navigate(['main-page'])
        })
      }
  }

  // protected override setupForm(): any[] {
  //   return [
  //     {
  //       login: ['', [Validators.required]],
  //       password: ['', Validators.required]
  //     }
  //   ]
  // }



}