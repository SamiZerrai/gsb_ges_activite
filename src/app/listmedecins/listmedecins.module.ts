import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListmedecinsPageRoutingModule } from './listmedecins-routing.module';

import { ListmedecinsPage } from './listmedecins.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListmedecinsPageRoutingModule
  ],
  declarations: [ListmedecinsPage]
})
export class ListmedecinsPageModule {}
