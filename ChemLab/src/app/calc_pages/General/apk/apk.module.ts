import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApkPageRoutingModule } from './apk-routing.module';

import { ApkPage } from './apk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApkPageRoutingModule
  ],
  declarations: [ApkPage]
})
export class ApkPageModule {}
