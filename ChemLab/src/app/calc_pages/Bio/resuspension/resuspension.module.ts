import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResuspensionPageRoutingModule } from './resuspension-routing.module';

import { ResuspensionPage } from './resuspension.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResuspensionPageRoutingModule
  ],
  declarations: [ResuspensionPage]
})
export class ResuspensionPageModule {}
