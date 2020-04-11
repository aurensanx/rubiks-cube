import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OllPageRoutingModule } from './oll-routing.module';

import { OllPage } from './oll.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OllPageRoutingModule
  ],
  declarations: [OllPage]
})
export class OllPageModule {}
