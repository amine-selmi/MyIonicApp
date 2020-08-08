import { Component, OnInit } from '@angular/core';
import { Produit } from '../models/produit';
import { ProduitService } from '../services/produit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  prod = new Produit();
  prodList: Produit[];
  id: number;
  
  constructor(private serviceProduit: ProduitService,
              public activatedRoute: ActivatedRoute,
              public router: Router,
              public navCtrl: NavController) { }

  ngOnInit() {  }

  ionViewWillEnter() {
    this.GetAllProds();
  }

  addProd() {
    this.serviceProduit.createItem(this.prod).subscribe((result) => {
      console.log("produit ajoute : ",this.prod);
      this.ionViewWillEnter();
    });
  }

  GetAllProds() {
    this.serviceProduit.getListProduit().subscribe( reponse => {
      console.log(reponse);
      this.prodList = reponse ;
    });
  }

  OnDelete(item: Produit) {
    this.serviceProduit.deleteItem(item.id).subscribe( response => this.GetAllProds());
  }



}
