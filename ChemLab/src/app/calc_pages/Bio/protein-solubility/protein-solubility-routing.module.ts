import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProteinSolubilityPage } from './protein-solubility.page';

const routes: Routes = [
  {
    path: '',
    component: ProteinSolubilityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProteinSolubilityPageRoutingModule {}
