import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListetyperemboursementPage } from './listetyperemboursement.page';

const routes: Routes = [
  {
    path: '',
    component: ListetyperemboursementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListetyperemboursementPageRoutingModule {}
