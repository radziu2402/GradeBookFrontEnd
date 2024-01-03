import {Component, Input, signal} from '@angular/core';
import {AuthService} from "../../service/security/auth.service";
import {Router} from "@angular/router";
import {MAP_ROLE_TO_URL} from "../../const/constants";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() pageTitle!: string;
  @Input() logoSrc!: string;

  constructor(private authService: AuthService, private router: Router) {
  }

  navigateOnClick($event: Event): void {
    $event.preventDefault();
    $event.stopPropagation();

    if(!this.authService.isLoggedIn()) {
      void this.router.navigate(['/home'])
      return;
    }
    void this.router.navigate([MAP_ROLE_TO_URL[this.authService.getRole()]])
  }
}
