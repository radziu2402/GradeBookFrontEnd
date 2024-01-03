import { Component } from '@angular/core';
import {Router} from "@angular/router";
import * as events from "events";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  constructor(private router: Router) {
  }

  onClickNavigate($event: MouseEvent) {
    $event.stopPropagation();
    $event.preventDefault();
    void this.router.navigate(['login'])
  }
}
