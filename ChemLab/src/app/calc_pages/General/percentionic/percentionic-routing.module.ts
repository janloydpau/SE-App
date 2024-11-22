import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PercentionicPage } from './percentionic.page';

const routes: Routes = [
  {
    path: '',
    component: PercentionicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PercentionicPageRoutingModule {}
