import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemboursementdeleguemedicalPage } from './remboursementdeleguemedical.page';

const routes: Routes = [
  {
    path: '',
    component: RemboursementdeleguemedicalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemboursementdeleguemedicalPageRoutingModule {}
