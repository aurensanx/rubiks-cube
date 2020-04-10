import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CubePageRoutingModule } from './cube-routing.module';

import { CubePage } from './cube.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CubePageRoutingModule
  ],
  declarations: [CubePage]
})
export class CubePageModule {}
