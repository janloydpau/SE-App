import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectronconfigurationPage } from './electronconfiguration.page';

const routes: Routes = [
  {
    path: '',
    component: ElectronconfigurationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElectronconfigurationPageRoutingModule {}
