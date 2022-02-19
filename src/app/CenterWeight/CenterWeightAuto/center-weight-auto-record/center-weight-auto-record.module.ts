import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CenterWeightAutoRecordPageRoutingModule } from './center-weight-auto-record-routing.module';

import { CenterWeightAutoRecordPage } from './center-weight-auto-record.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CenterWeightAutoRecordPageRoutingModule
  ],
  declarations: [CenterWeightAutoRecordPage]
})
export class CenterWeightAutoRecordPageModule {}
