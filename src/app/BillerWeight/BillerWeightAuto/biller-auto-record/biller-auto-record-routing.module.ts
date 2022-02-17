import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillerAutoRecordPage } from './biller-auto-record.page';

const routes: Routes = [
  {
    path: '',
    component: BillerAutoRecordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillerAutoRecordPageRoutingModule {}
