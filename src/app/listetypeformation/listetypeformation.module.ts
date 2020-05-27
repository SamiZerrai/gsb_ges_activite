import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListetypeformationPageRoutingModule } from './listetypeformation-routing.module';

import { ListetypeformationPage } from './listetypeformation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListetypeformationPageRoutingModule
  ],
  declarations: [ListetypeformationPage]
})
export class ListetypeformationPageModule {}
