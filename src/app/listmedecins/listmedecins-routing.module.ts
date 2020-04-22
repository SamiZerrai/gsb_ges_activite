import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListmedecinsPage } from './listmedecins.page';

const routes: Routes = [
  {
    path: '',
    component: ListmedecinsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListmedecinsPageRoutingModule {}
