import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemboursementdeleguemedicalperiodePage } from './remboursementdeleguemedicalperiode.page';

const routes: Routes = [
  {
    path: '',
    component: RemboursementdeleguemedicalperiodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemboursementdeleguemedicalperiodePageRoutingModule {}
