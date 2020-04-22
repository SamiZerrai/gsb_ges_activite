import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailmedecinPage } from './detailmedecin.page';

const routes: Routes = [
  {
    path: '',
    component: DetailmedecinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailmedecinPageRoutingModule {}
