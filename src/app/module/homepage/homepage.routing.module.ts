import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent }   from './homepage.component';
import {LoginComponent} from '../login/login.component';
//import { HeroComponent }      from './hero/hero.component';
//import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
const routes: Routes = [
  { path: 'homepage',  component: HomepageComponent }
  /*,
  { path: 'user', component: TestComponent },
  { path: 'About',     component: TestComponent }*/
];
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class HomepageRoutingModule {}
