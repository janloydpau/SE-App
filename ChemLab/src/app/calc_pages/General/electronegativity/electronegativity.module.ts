import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElectronegativityPageRoutingModule } from './electronegativity-routing.module';

import { ElectronegativityPage } from './electronegativity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElectronegativityPageRoutingModule
  ],
  declarations: [ElectronegativityPage]
})
export class ElectronegativityPageModule {}
