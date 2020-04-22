import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetaildeleguePageRoutingModule } from './detaildelegue-routing.module';

import { DetaildeleguePage } from './detaildelegue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetaildeleguePageRoutingModule
  ],
  declarations: [DetaildeleguePage]
})
export class DetaildeleguePageModule {}
