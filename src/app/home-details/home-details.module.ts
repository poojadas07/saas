import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeDetailsComponent } from './home-details.component';
import { ContactComponent } from './contact/contact.component';
import { DonateComponent } from './donate/donate.component';
import { RecieveComponent } from './recieve/recieve.component';
import { FoodMapComponent } from './food-map/food-map.component';
import { HomeDetailsRoutingModule } from './home-details-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeDetailsComponent,
    ContactComponent,
    DonateComponent,
    RecieveComponent,
    FoodMapComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeDetailsRoutingModule
  ]
})
export class HomeDetailsModule { }
