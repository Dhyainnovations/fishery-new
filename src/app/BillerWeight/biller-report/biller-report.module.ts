import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BillerReportPageRoutingModule } from './biller-report-routing.module';

import { BillerReportPage } from './biller-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BillerReportPageRoutingModule
  ],
  declarations: [BillerReportPage]
})
export class BillerReportPageModule {}
