import { EventEmitter, Component, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  })
export class LoginFormComponent {
  constructor(private router: Router) {}
  @Output() onSubmitLoginEvent = new EventEmitter();
  @Output() onSubmitRegisterEvent = new EventEmitter();

	active: string = "login";
  email: string = "";
  login: string = "";
  password: string = "";

	onLoginTab(): void {
		this.active = "login";
	}

	onRegisterTab(): void {
		this.active = "register";
	}

  onSubmitLogin(): void {
    this.onSubmitLoginEvent.emit({"login": this.login, "password": this.password});
    // this.onLoginSuccess();
  }
  onLoginSuccess() {
    this.router.navigate(['/homepage']).then(r => console.log("poszlo"));
  }

  onSubmitRegister(): void {
    this.onSubmitRegisterEvent.emit({"email": this.email, "login": this.login, "password": this.password});
  }

}
