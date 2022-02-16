import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CenterManualWeighterPageRoutingModule } from './center-manual-weighter-routing.module';

import { CenterManualWeighterPage } from './center-manual-weighter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CenterManualWeighterPageRoutingModule
  ],
  declarations: [CenterManualWeighterPage]
})
export class CenterManualWeighterPageModule {}
