import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListedeleguesPage } from './listedelegues.page';

const routes: Routes = [
  {
    path: '',
    component: ListedeleguesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListedeleguesPageRoutingModule {}
