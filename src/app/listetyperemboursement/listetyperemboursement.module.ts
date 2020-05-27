import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListetyperemboursementPageRoutingModule } from './listetyperemboursement-routing.module';

import { ListetyperemboursementPage } from './listetyperemboursement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListetyperemboursementPageRoutingModule
  ],
  declarations: [ListetyperemboursementPage]
})
export class ListetyperemboursementPageModule {}
