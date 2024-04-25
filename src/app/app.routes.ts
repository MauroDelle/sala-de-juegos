import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { HomeComponent } from './modules/home/home/home.component';
import { AboutMeComponent } from './modules/about-me/about-me/about-me.component';
import { RegisterComponent } from './modules/auth/components/register/register.component';

export const routes: Routes = [

  {path : '',component : LoginComponent},
  {path : 'home', component : HomeComponent},
  {path : 'about-me', component : AboutMeComponent},
  {path : 'register', component : RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
