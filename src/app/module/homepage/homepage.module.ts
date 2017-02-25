import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomepageComponent} from './homepage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [HomepageComponent],
  exports:  [HomepageComponent]
})
export class HomepageModule { }
