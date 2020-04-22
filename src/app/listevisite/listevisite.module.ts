import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListevisitePageRoutingModule } from './listevisite-routing.module';

import { ListevisitePage } from './listevisite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListevisitePageRoutingModule
  ],
  declarations: [ListevisitePage]
})
export class ListevisitePageModule {}
