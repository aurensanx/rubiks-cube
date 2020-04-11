import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PllPageRoutingModule } from './pll-routing.module';

import { PllPage } from './pll.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PllPageRoutingModule
  ],
  declarations: [PllPage]
})
export class PllPageModule {}
