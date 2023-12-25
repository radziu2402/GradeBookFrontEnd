import { Component } from '@angular/core';
import { AxiosService } from '../axios.service';

@Component({
  selector: 'app-auth-content',
  templateUrl: './auth-content.component.html',
  styleUrls: ['./auth-content.component.css']
})
export class AuthContentComponent {
  data: string[] = [];

  constructor(private axiosService: AxiosService) {}

  ngOnInit(): void {
    console.log('Initiating request to /siema endpoint...');

    this.axiosService.request(
      "GET",
      "/siema",
      {}
    ).then(
      (response) => {
        console.log('Request successful. Response data:', response.data);
        this.data = response.data;
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
