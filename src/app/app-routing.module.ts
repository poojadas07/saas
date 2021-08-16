import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{path : '', pathMatch: 'full', redirectTo: '/login'},
                        { path: 'dashboard', loadChildren: () => import('./home-details/home-details.module').then(m => m.HomeDetailsModule), canActivate : [AuthGuard]},
                        { path: 'login', component: LoginComponent},
                        { path: 'register', component: RegisterComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
