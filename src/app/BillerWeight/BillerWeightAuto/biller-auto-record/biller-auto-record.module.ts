import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BillerAutoRecordPageRoutingModule } from './biller-auto-record-routing.module';

import { BillerAutoRecordPage } from './biller-auto-record.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BillerAutoRecordPageRoutingModule
  ],
  declarations: [BillerAutoRecordPage]
})
export class BillerAutoRecordPageModule {}
