import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListetypecadeauxPage } from './listetypecadeaux.page';

const routes: Routes = [
  {
    path: '',
    component: ListetypecadeauxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListetypecadeauxPageRoutingModule {}
