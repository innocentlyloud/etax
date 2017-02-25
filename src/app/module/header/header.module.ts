import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header.component';
import { CollapseModule } from 'ng2-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HeaderRoutingModule} from "./header.routing.module";
import { RouterModule }   from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    HeaderRoutingModule
    //RouterModule
    //CollapseModule.forRoot()
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { }
