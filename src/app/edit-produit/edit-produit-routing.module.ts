import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditProduitPage } from './edit-produit.page';

const routes: Routes = [
  {
    path: '',
    component: EditProduitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditProduitPageRoutingModule {}
