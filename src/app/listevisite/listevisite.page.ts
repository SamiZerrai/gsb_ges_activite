import { Component, OnInit } from '@angular/core';
import { Visite } from '../models/visite';
import { ApirestService } from '../services/apirest.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listevisite',
  templateUrl: './listevisite.page.html',
  styleUrls: ['./listevisite.page.scss'],
})
export class ListevisitePage implements OnInit {

  LesVisites: Visite[] = [];

  constructor(private monServ: ApirestService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.monServ.getVisiteListe(this.activatedRoute.snapshot.params.id).subscribe(
    value => {
      this.LesVisites = value;
      console.log(this.LesVisites);
    },
    error => {
      console.log("Récupération médecin impossible");
    }
  )
}
}