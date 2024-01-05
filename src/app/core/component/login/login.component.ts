import {Component} from '@angular/core';
import {AuthService} from "../../service/security/auth.service";
import {Router} from "@angular/router";
import {MAP_ROLE_TO_URL} from "../../const/constants";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  active: string = "login";
  login: string = "";
  password: string = "";
  passwordVisible: boolean = false;

  protected readonly faEyeSlash = faEyeSlash;

  constructor(private authService: AuthService, private router: Router) {
  }

  submit() {
    if (this.login && this.password) {
      this.authService.login(this.login, this.password).subscribe({
        next: () => this.router.navigate([MAP_ROLE_TO_URL[this.authService.getRole()]]),
      })
    }
  }

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
    const passwordInput = document.getElementById('loginPassword') as HTMLInputElement;
    passwordInput.type = this.passwordVisible ? 'text' : 'password';
  }

  protected readonly faEye = faEye;
}
