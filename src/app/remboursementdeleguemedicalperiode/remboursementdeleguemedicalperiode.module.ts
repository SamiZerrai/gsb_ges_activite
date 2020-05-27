import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemboursementdeleguemedicalperiodePageRoutingModule } from './remboursementdeleguemedicalperiode-routing.module';

import { RemboursementdeleguemedicalperiodePage } from './remboursementdeleguemedicalperiode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemboursementdeleguemedicalperiodePageRoutingModule
  ],
  declarations: [RemboursementdeleguemedicalperiodePage]
})
export class RemboursementdeleguemedicalperiodePageModule {}
