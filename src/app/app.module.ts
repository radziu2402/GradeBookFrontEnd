import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ButtonsComponent} from './buttons/buttons.component';
import {HeaderComponent} from './core/component/header/header.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {ContentComponent} from './content/content.component';

import {AxiosService} from './axios.service';
import { HomepageComponent } from './homepage/homepage.component';
import {LoginComponent} from "./core/component/login/login.component";
import {FooterComponent} from "./core/component/footer/footer.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    HeaderComponent,
    LoginFormComponent,
    ContentComponent,
    HomepageComponent,
    LoginComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AxiosService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
