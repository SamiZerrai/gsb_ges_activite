import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListevisitePage } from './listevisite.page';

const routes: Routes = [
  {
    path: '',
    component: ListevisitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListevisitePageRoutingModule {}
