import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BillerAutoDashboardPageRoutingModule } from './biller-auto-dashboard-routing.module';

import { BillerAutoDashboardPage } from './biller-auto-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BillerAutoDashboardPageRoutingModule
  ],
  declarations: [BillerAutoDashboardPage]
})
export class BillerAutoDashboardPageModule {}
