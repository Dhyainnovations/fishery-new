import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CenterWeightManualRecordPage } from './center-weight-manual-record.page';

const routes: Routes = [
  {
    path: '',
    component: CenterWeightManualRecordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CenterWeightManualRecordPageRoutingModule {}
