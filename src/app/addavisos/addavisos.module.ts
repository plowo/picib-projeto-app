import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddavisosPageRoutingModule } from './addavisos-routing.module';

import { AddavisosPage } from './addavisos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddavisosPageRoutingModule
  ],
  declarations: [AddavisosPage]
})
export class AddavisosPageModule {}
