import { Component, OnInit } from '@angular/core';
import { TypeFormation } from '../models/type-formation';
import { ApirestService } from '../services/apirest.service';
import { error } from 'protractor';

@Component({
  selector: 'app-listetypeformation',
  templateUrl: './listetypeformation.page.html',
  styleUrls: ['./listetypeformation.page.scss'],
})
export class ListetypeformationPage implements OnInit {

  lesTypesFormations: TypeFormation[] = [];

  constructor(private monServ: ApirestService) { }

  ngOnInit() {
    this.monServ.getTypeFormationListe().subscribe(
      value => {
        this.lesTypesFormations = value;
        console.log(this.lesTypesFormations);
      },
      error => {
        console.log("Récupération liste type cadeau impossible");
      }
    )
  }

}