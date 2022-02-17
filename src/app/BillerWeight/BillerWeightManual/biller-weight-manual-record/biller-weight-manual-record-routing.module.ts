import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillerWeightManualRecordPage } from './biller-weight-manual-record.page';

const routes: Routes = [
  {
    path: '',
    component: BillerWeightManualRecordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillerWeightManualRecordPageRoutingModule {}
