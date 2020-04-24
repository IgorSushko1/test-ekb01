import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';
import { MatSliderModule } from '@angular/material/slider';

import { AppComponent } from './app.component';
import { CarFlashViewComponent } from './car-flash-view/car-flash-view.component';
import { PanelWithCarsComponent } from './panel-with-cars/panel-with-cars.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CarTechSpecComponent } from './car-tech-spec/car-tech-spec.component';


import { PageCreditComponent } from './page-credit/page-credit.component';
import { CreditMenuComponent } from './credit-menu/credit-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HelpComponent } from './help/help.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    CarFlashViewComponent,
    PanelWithCarsComponent,
    ContactsComponent,
    CarTechSpecComponent,
    PageCreditComponent,
    CreditMenuComponent,
    HelpComponent,
    ConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatSliderModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {



}
