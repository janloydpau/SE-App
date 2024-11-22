import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElectronconfigurationPageRoutingModule } from './electronconfiguration-routing.module';

import { ElectronconfigurationPage } from './electronconfiguration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElectronconfigurationPageRoutingModule
  ],
  declarations: [ElectronconfigurationPage]
})
export class ElectronconfigurationPageModule {}
