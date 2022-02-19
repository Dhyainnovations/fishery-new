import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillerWeightManualDashboardPage } from './biller-weight-manual-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: BillerWeightManualDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillerWeightManualDashboardPageRoutingModule {}
