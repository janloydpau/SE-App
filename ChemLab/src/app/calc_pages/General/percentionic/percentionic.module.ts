import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PercentionicPageRoutingModule } from './percentionic-routing.module';

import { PercentionicPage } from './percentionic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PercentionicPageRoutingModule
  ],
  declarations: [PercentionicPage]
})
export class PercentionicPageModule {}
