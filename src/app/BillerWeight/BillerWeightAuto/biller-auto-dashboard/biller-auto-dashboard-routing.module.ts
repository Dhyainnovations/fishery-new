import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillerAutoDashboardPage } from './biller-auto-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: BillerAutoDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillerAutoDashboardPageRoutingModule {}
