import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeighterReportPageRoutingModule } from './weighter-report-routing.module';

import { WeighterReportPage } from './weighter-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeighterReportPageRoutingModule
  ],
  declarations: [WeighterReportPage]
})
export class WeighterReportPageModule {}
