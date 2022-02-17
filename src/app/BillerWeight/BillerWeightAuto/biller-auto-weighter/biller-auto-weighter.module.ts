import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BillerAutoWeighterPageRoutingModule } from './biller-auto-weighter-routing.module';

import { BillerAutoWeighterPage } from './biller-auto-weighter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BillerAutoWeighterPageRoutingModule
  ],
  declarations: [BillerAutoWeighterPage]
})
export class BillerAutoWeighterPageModule {}
