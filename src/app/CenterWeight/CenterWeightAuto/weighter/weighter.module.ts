import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeighterPageRoutingModule } from './weighter-routing.module';

import { WeighterPage } from './weighter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeighterPageRoutingModule
  ],
  declarations: [WeighterPage]
})
export class WeighterPageModule {}
