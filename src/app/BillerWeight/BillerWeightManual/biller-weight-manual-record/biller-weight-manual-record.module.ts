import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BillerWeightManualRecordPageRoutingModule } from './biller-weight-manual-record-routing.module';

import { BillerWeightManualRecordPage } from './biller-weight-manual-record.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BillerWeightManualRecordPageRoutingModule
  ],
  declarations: [BillerWeightManualRecordPage]
})
export class BillerWeightManualRecordPageModule {}
