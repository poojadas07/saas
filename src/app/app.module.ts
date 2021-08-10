import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';
import { DonateComponent } from './home-details/home-details/donate/donate.component';
import { RecieveComponent } from './home-details/home-details/recieve/recieve.component';
import { FoodMapComponent } from './home-details/home-details/food-map/food-map.component';
import { ContactComponent } from './home-details/home-details/contact/contact.component';
import { HomeDetailsComponent } from './home-details/home-details/home-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    DonateComponent,
    RecieveComponent,
    FoodMapComponent,
    ContactComponent,
    HomeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
