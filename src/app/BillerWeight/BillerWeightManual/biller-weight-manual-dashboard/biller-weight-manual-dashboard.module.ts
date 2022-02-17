import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BillerWeightManualDashboardPageRoutingModule } from './biller-weight-manual-dashboard-routing.module';

import { BillerWeightManualDashboardPage } from './biller-weight-manual-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BillerWeightManualDashboardPageRoutingModule
  ],
  declarations: [BillerWeightManualDashboardPage]
})
export class BillerWeightManualDashboardPageModule {}
