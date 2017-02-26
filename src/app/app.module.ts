import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { AlertModule } from 'ng2-bootstrap';
import { AppComponent } from './app.component';

import {HeaderModule} from './module/header/header.module';
import {FooterModule} from './module/footer/footer.module';
import {HomepageModule} from './module/homepage/homepage.module';
import {LoginModule} from './module/login/login.module';

import { TestComponent } from './test/test.component';

//import { RouterModule, Routes } from '@angular/router';
//import {HeaderRoutingModule} from './module/header/header.routing.module';
import { AppRoutingModule }     from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HeaderModule,
    FooterModule,
    HomepageModule,
    LoginModule,
    AppRoutingModule
    //RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { TestComponent }   from './test/test.component';

import { AppRoutingModule }     from './app-routing.module';
import {HeaderModule} from './module/header/header.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HeaderModule
  ],
  declarations: [
    AppComponent,
    TestComponent
    //HeroDetailComponent,
    //HeroesComponent
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
*/
