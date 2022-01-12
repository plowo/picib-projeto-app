import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddavisosPage } from './addavisos.page';

const routes: Routes = [
  {
    path: '',
    component: AddavisosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddavisosPageRoutingModule {}
