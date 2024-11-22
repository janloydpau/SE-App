import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResuspensionPage } from './resuspension.page';

const routes: Routes = [
  {
    path: '',
    component: ResuspensionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResuspensionPageRoutingModule {}
