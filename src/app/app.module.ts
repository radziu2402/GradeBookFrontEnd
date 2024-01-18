import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './core/component/header/header.component';


import {LoginComponent} from "./core/component/login/login.component";
import {FooterComponent} from "./core/component/footer/footer.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatTableModule} from '@angular/material/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthInterceptor} from "./core/service/security/auth.interceptor";
import {HomepageComponent} from "./core/component/homepage/homepage.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {ProfileModule} from "./profile/profile.module";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {ActionItemComponent} from './teacher/component/action-item/action-item.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    LoginComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatCardModule,
    MatButtonModule,
    ProfileModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
