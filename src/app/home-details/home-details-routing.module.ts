import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeDetailsComponent } from './home-details.component';

const routes: Routes =  [  {path: '', component: HomeDetailsComponent, children: [
                          {path: '', pathMatch: 'full', redirectTo: 'home'},
                          {path: 'home',  component: ContactComponent}]}
                        ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeDetailsRoutingModule { }