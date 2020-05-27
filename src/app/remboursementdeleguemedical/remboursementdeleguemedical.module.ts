import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemboursementdeleguemedicalPageRoutingModule } from './remboursementdeleguemedical-routing.module';

import { RemboursementdeleguemedicalPage } from './remboursementdeleguemedical.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemboursementdeleguemedicalPageRoutingModule
  ],
  declarations: [RemboursementdeleguemedicalPage]
})
export class RemboursementdeleguemedicalPageModule {}
