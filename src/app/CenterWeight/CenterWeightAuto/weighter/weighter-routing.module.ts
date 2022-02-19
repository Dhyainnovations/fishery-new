import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeighterPage } from './weighter.page';

const routes: Routes = [
  {
    path: '',
    component: WeighterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeighterPageRoutingModule {}
