import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserCreationPageRoutingModule } from './user-creation-routing.module';

import { UserCreationPage } from './user-creation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserCreationPageRoutingModule
  ],
  declarations: [UserCreationPage]
})
export class UserCreationPageModule {}
