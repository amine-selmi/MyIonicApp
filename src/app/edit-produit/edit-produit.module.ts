import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditProduitPageRoutingModule } from './edit-produit-routing.module';

import { EditProduitPage } from './edit-produit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditProduitPageRoutingModule
  ],
  declarations: [EditProduitPage]
})
export class EditProduitPageModule {}
