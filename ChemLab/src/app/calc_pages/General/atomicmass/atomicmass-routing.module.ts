import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtomicmassPage } from './atomicmass.page';

const routes: Routes = [
  {
    path: '',
    component: AtomicmassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtomicmassPageRoutingModule {}
