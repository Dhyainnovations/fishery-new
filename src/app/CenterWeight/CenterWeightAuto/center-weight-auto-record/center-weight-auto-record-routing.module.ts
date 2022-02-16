import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CenterWeightAutoRecordPage } from './center-weight-auto-record.page';

const routes: Routes = [
  {
    path: '',
    component: CenterWeightAutoRecordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CenterWeightAutoRecordPageRoutingModule {}
