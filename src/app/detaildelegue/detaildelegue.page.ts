import { Component, OnInit } from '@angular/core';
import { Delegue } from '../models/delegue';
import { ApirestService } from '../services/apirest.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detaildelegue',
  templateUrl: './detaildelegue.page.html',
  styleUrls: ['./detaildelegue.page.scss'],
})
export class DetaildeleguePage implements OnInit {

  public unDelegue: Delegue = {
    id: 0,
    nom: '',
    prenom: '',
    telephone: '',
    secteur: '',
  };

  constructor(private monServ: ApirestService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.monServ.getDelegue(this.activatedRoute.snapshot.params.id).subscribe(
    value => {
      this.unDelegue = value;
      console.log(this.unDelegue);
    },
    error => {
      console.log("Récupération délégué impossible");
    }
  )
}

}
