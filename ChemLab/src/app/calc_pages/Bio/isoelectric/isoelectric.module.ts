import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IsoelectricPageRoutingModule } from './isoelectric-routing.module';

import { IsoelectricPage } from './isoelectric.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IsoelectricPageRoutingModule
  ],
  declarations: [IsoelectricPage]
})
export class IsoelectricPageModule {}
