import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProteinSolubilityPageRoutingModule } from './protein-solubility-routing.module';

import { ProteinSolubilityPage } from './protein-solubility.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProteinSolubilityPageRoutingModule
  ],
  declarations: [ProteinSolubilityPage]
})
export class ProteinSolubilityPageModule {}
