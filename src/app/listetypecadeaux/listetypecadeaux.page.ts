import { Component, OnInit } from '@angular/core';
import { TypeCadeau } from '../models/type-cadeau';
import { ApirestService } from '../services/apirest.service'
import { error } from 'protractor';

@Component({
  selector: 'app-listetypecadeaux',
  templateUrl: './listetypecadeaux.page.html',
  styleUrls: ['./listetypecadeaux.page.scss'],
})
export class ListetypecadeauxPage implements OnInit {

  lesTypesCadeaux: TypeCadeau[] = [];

  constructor(private monServ: ApirestService) { }

  ngOnInit() {
    this.monServ.getTypeCadeauListe().subscribe(
      value => {
        this.lesTypesCadeaux = value;
        console.log(this.lesTypesCadeaux);
      },
      error => {
        console.log("Récupération liste type cadeau impossible");
      }
    )
  }

}