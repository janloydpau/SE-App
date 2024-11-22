import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtomNamePage } from './atom-name.page';

const routes: Routes = [
  {
    path: '',
    component: AtomNamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtomNamePageRoutingModule {}
