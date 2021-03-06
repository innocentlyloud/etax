import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomepageComponent} from './homepage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HomepageRoutingModule} from './homepage.routing.module';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    HomepageRoutingModule
  ],
  declarations: [HomepageComponent],
  exports:  [HomepageComponent]
})
export class HomepageModule { }
