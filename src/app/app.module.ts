import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { AppComponent } from './app.component';
import { CarFlashViewComponent } from './car-flash-view/car-flash-view.component';
import { PanelWithCarsComponent } from './panel-with-cars/panel-with-cars.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CarTechSpecComponent } from './car-tech-spec/car-tech-spec.component';


import { PageCreditComponent } from './page-credit/page-credit.component';
import { CreditMenuComponent } from './credit-menu/credit-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    CarFlashViewComponent,
    PanelWithCarsComponent,
    ContactsComponent,
    CarTechSpecComponent,
    PageCreditComponent,
    CreditMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {



}
