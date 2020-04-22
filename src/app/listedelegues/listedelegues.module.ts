import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListedeleguesPageRoutingModule } from './listedelegues-routing.module';

import { ListedeleguesPage } from './listedelegues.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListedeleguesPageRoutingModule
  ],
  declarations: [ListedeleguesPage]
})
export class ListedeleguesPageModule {}
