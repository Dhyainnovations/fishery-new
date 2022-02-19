import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillerReportPage } from './biller-report.page';

const routes: Routes = [
  {
    path: '',
    component: BillerReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillerReportPageRoutingModule {}
