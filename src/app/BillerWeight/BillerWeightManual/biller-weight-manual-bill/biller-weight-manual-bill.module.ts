import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BillerWeightManualBillPageRoutingModule } from './biller-weight-manual-bill-routing.module';

import { BillerWeightManualBillPage } from './biller-weight-manual-bill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BillerWeightManualBillPageRoutingModule
  ],
  declarations: [BillerWeightManualBillPage]
})
export class BillerWeightManualBillPageModule {}
