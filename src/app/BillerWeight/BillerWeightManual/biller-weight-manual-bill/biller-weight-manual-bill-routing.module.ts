import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillerWeightManualBillPage } from './biller-weight-manual-bill.page';

const routes: Routes = [
  {
    path: '',
    component: BillerWeightManualBillPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillerWeightManualBillPageRoutingModule {}
