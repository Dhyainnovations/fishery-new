import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CenterWeightManualRecordPageRoutingModule } from './center-weight-manual-record-routing.module';

import { CenterWeightManualRecordPage } from './center-weight-manual-record.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CenterWeightManualRecordPageRoutingModule
  ],
  declarations: [CenterWeightManualRecordPage]
})
export class CenterWeightManualRecordPageModule {}
