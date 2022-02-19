import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillerAutoWeighterPage } from './biller-auto-weighter.page';

const routes: Routes = [
  {
    path: '',
    component: BillerAutoWeighterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillerAutoWeighterPageRoutingModule {}
