import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsoelectricPage } from './isoelectric.page';

const routes: Routes = [
  {
    path: '',
    component: IsoelectricPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IsoelectricPageRoutingModule {}
