import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnzymeactivityPageRoutingModule } from './enzymeactivity-routing.module';

import { EnzymeactivityPage } from './enzymeactivity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnzymeactivityPageRoutingModule
  ],
  declarations: [EnzymeactivityPage]
})
export class EnzymeactivityPageModule {}
