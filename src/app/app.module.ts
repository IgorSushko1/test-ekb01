import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';
import { MatSliderModule } from '@angular/material/slider';
// import { Index } from '@angular/cdk/schematics/ng-add/';

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
// import { NaviComponent } from './navi/navi.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
// import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
// import { TreeComponent } from './tree/tree.component';
import { MatTreeModule } from '@angular/material/tree';
// import { DndComponent } from './dnd/dnd.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


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
    // NaviComponent,
    // TableComponent,
    // DashboardComponent,
    // TreeComponent,
    // DndComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTreeModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {



}
