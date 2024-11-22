import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApkPage } from './apk.page';

const routes: Routes = [
  {
    path: '',
    component: ApkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApkPageRoutingModule {}
