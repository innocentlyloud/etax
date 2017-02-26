import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent }   from './login.component';
//import { HeroComponent }      from './hero/hero.component';
//import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
const routes: Routes = [
  { path: 'user',  component: LoginComponent }
];
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class LoginRoutingModule {}
