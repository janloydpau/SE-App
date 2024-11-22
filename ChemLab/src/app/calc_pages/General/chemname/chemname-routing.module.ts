import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChemnamePage } from './chemname.page';

const routes: Routes = [
  {
    path: '',
    component: ChemnamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChemnamePageRoutingModule {}
