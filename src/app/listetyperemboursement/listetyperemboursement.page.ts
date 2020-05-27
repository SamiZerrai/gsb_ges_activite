import { Component, OnInit } from '@angular/core';
import { TypeRemboursement } from '../models/type-remboursement';
import { ApirestService } from '../services/apirest.service'
import { error } from 'protractor';

@Component({
  selector: 'app-listetyperemboursement',
  templateUrl: './listetyperemboursement.page.html',
  styleUrls: ['./listetyperemboursement.page.scss'],
})
export class ListetyperemboursementPage implements OnInit {

  lesTypesRemboursement: TypeRemboursement[] = [];

  constructor(private monServ: ApirestService) { }

  ngOnInit() {
    this.monServ.getTypeRemboursementListe().subscribe(
      value => {
        this.lesTypesRemboursement = value;
        console.log(this.lesTypesRemboursement);
      },
      error => {
        console.log("Récupération liste type cadeau impossible");
      }
    )
  }

}
