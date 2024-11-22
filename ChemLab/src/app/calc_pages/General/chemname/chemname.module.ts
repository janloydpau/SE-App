import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChemnamePageRoutingModule } from './chemname-routing.module';

import { ChemnamePage } from './chemname.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChemnamePageRoutingModule
  ],
  declarations: [ChemnamePage]
})
export class ChemnamePageModule {}
