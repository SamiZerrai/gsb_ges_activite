import { Component, OnInit } from '@angular/core';
import { Medecin } from '../models/medecin';
import { ApirestService } from '../services/apirest.service'
import { error } from 'protractor';

@Component({
  selector: 'app-listmedecins',
  templateUrl: './listmedecins.page.html',
  styleUrls: ['./listmedecins.page.scss'],
})
export class ListmedecinsPage implements OnInit {

  LesMedecins: Medecin[] = [];

  constructor(private monServ: ApirestService) { }

  ngOnInit() {
    this.monServ.getMedecinListe().subscribe(
      value => {
        this.LesMedecins = value;
        console.log(this.LesMedecins);
      },
      error => {
        console.log("Récupération liste médecin impossible");
      }
    )
  }

}
