import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PercentcompositionPageRoutingModule } from './percentcomposition-routing.module';

import { PercentcompositionPage } from './percentcomposition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PercentcompositionPageRoutingModule
  ],
  declarations: [PercentcompositionPage]
})
export class PercentcompositionPageModule {}
