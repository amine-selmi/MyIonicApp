import { Component, OnInit } from '@angular/core';
import { Produit } from '../models/produit';
import { ProduitService } from '../services/produit.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AccueilPage } from '../accueil/accueil.page';

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.page.html',
  styleUrls: ['./edit-produit.page.scss'],
})
export class EditProduitPage implements OnInit {

  prod : Produit;
  id: number;

  constructor(private serviceProduit: ProduitService,
              public activatedRoute: ActivatedRoute,
              public router: Router) { this.prod = new Produit(); }

  ngOnInit() {
    if (this.activatedRoute.snapshot.params["id"]) {
      this.id = this.activatedRoute.snapshot.params["id"];
    }
    //get item details using id
    this.serviceProduit.getItem(this.id).subscribe(response => {
      console.log(response);
      this.prod = response;
    })
  }

  update() {
    //console.log("produit modifiee :", this.prod)
    this.serviceProduit.editItem(this.id,this.prod).subscribe( response => {
      console.log("produit modifiee :", this.prod)
      this.router.navigate(['accueil']);
      AccueilPage;
    })
  }
  

}
