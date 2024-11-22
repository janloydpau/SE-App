import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectronegativityPage } from './electronegativity.page';

const routes: Routes = [
  {
    path: '',
    component: ElectronegativityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElectronegativityPageRoutingModule {}
