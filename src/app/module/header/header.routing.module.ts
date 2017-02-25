import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent }   from '../../test/test.component';
//import { HeroComponent }      from './hero/hero.component';
//import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
const routes: Routes = [
  { path: 'index',  component: TestComponent },
  { path: 'Portfolio', component: TestComponent },
  { path: 'About',     component: TestComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class HeaderRoutingModule {}
