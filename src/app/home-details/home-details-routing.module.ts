import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DonateComponent } from './donate/donate.component';
import { FoodMapComponent } from './food-map/food-map.component';
import { HomeDetailsComponent } from './home-details.component';
import { HomeComponent } from './home/home.component';
import { RecieveComponent } from './recieve/recieve.component';

const routes: Routes =  [  {path: '', component: HomeDetailsComponent, children: [
                          {path: '', pathMatch: 'full', redirectTo: 'home'},
                          {path: 'home',  component: HomeComponent},
                          {path: 'donate',  component: DonateComponent},
                          {path: 'recieve',  component: RecieveComponent},
                          {path: 'food-map',  component: FoodMapComponent},
                          {path: 'contact',  component: ContactComponent}]}
                        ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeDetailsRoutingModule { }