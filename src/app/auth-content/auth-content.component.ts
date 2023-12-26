import {Component, OnInit} from '@angular/core';
import {AxiosService} from '../axios.service';

@Component({
  selector: 'app-auth-content',
  templateUrl: './auth-content.component.html',
  styleUrls: ['./auth-content.component.css']
})
export class AuthContentComponent implements OnInit {
  data: string[] = [];

  constructor(private axiosService: AxiosService) {
  }

  ngOnInit(): void {
    this.axiosService.request(
      "GET",
      "/esa",
      {}
    ).then(
      (response) => {
        this.data = Array.isArray(response.data) ? response.data : [response.data];
      }
    ).catch(
      (error) => {
        console.error('Error during request:', error);
        if (error.response.status === 401) {
          this.axiosService.setAuthToken(null);
        } else {
          this.data = error.response.code;
        }
      }
    );
  }

}
