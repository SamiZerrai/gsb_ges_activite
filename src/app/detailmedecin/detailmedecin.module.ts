import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailmedecinPageRoutingModule } from './detailmedecin-routing.module';

import { DetailmedecinPage } from './detailmedecin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailmedecinPageRoutingModule
  ],
  declarations: [DetailmedecinPage]
})
export class DetailmedecinPageModule {}
