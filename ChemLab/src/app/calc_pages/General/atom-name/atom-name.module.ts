import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';  // This is the important import for Ionic components

import { AtomNamePageRoutingModule } from './atom-name-routing.module';
import { AtomNamePage } from './atom-name.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,  // This allows Ionic components to be used in your page
    AtomNamePageRoutingModule
  ],
  declarations: [AtomNamePage],  // Your page is declared here
})
export class AtomNamePageModule {}
