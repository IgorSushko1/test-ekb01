import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCreditComponent } from './page-credit/page-credit.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { PanelWithCarsComponent } from './panel-with-cars/panel-with-cars.component';

const routes: Routes = [
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'main', component: PanelWithCarsComponent },
  { path: 'credit/:id', component: PageCreditComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
