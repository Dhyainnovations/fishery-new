import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeighterReportPage } from './weighter-report.page';

const routes: Routes = [
  {
    path: '',
    component: WeighterReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeighterReportPageRoutingModule {}
