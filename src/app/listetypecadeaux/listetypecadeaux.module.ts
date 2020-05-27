import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListetypecadeauxPageRoutingModule } from './listetypecadeaux-routing.module';

import { ListetypecadeauxPage } from './listetypecadeaux.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListetypecadeauxPageRoutingModule
  ],
  declarations: [ListetypecadeauxPage]
})
export class ListetypecadeauxPageModule {}
