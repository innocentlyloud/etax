import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent }   from './test/test.component';
import { NotFoundComponent } from './not-found/not-found.component';
//import { HeroComponent }      from './hero/hero.component';
//import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import {HomepageComponent} from "./module/homepage/homepage.component";

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  //{ path: 'homepage',  component: HomepageComponent },
  { path: 'About', component: TestComponent },
  { path: '**',     component: NotFoundComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


