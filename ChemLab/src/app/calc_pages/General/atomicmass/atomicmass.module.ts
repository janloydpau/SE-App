import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtomicmassPageRoutingModule } from './atomicmass-routing.module';

import { AtomicmassPage } from './atomicmass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtomicmassPageRoutingModule
  ],
  declarations: [AtomicmassPage]
})
export class AtomicmassPageModule {}
