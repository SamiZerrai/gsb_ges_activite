import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListetypeformationPage } from './listetypeformation.page';

const routes: Routes = [
  {
    path: '',
    component: ListetypeformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListetypeformationPageRoutingModule {}
