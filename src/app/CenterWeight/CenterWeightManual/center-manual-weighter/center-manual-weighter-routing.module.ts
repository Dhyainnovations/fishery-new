import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CenterManualWeighterPage } from './center-manual-weighter.page';

const routes: Routes = [
  {
    path: '',
    component: CenterManualWeighterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CenterManualWeighterPageRoutingModule {}
