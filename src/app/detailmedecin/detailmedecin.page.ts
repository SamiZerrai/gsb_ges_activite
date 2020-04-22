import { Component, OnInit } from '@angular/core';
import { Medecin } from '../models/medecin';
import { ApirestService } from '../services/apirest.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailmedecin',
  templateUrl: './detailmedecin.page.html',
  styleUrls: ['./detailmedecin.page.scss'],
})
export class DetailmedecinPage implements OnInit {

  public unMedecin: Medecin = {
    id: 0,
    medical: '',
    secteur: '',
    ville: '',
    nom: '',
    prenom: '',
    telephone: ''
  };

  constructor(private monServ: ApirestService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.monServ.getMedecin(this.activatedRoute.snapshot.params.id).subscribe(
    value => {
      this.unMedecin = value;
      console.log(this.unMedecin);
    },
    error => {
      console.log("Récupération médecin impossible");
    }
  )
}
}