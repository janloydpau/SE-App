import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnzymeactivityPage } from './enzymeactivity.page';

const routes: Routes = [
  {
    path: '',
    component: EnzymeactivityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnzymeactivityPageRoutingModule {}
