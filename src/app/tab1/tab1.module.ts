import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { NgSelectModule } from '@ng-select/ng-select';

import { Tab1PageRoutingModule } from './tab1-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
   
    Tab1PageRoutingModule,NgSelectModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
