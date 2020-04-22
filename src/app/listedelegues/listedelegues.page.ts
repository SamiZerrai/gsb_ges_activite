import { Component, OnInit } from '@angular/core';
import { Delegue } from '../models/delegue';
import { ApirestService } from '../services/apirest.service'
import { error } from 'protractor';

@Component({
  selector: 'app-listedelegues',
  templateUrl: './listedelegues.page.html',
  styleUrls: ['./listedelegues.page.scss'],
})
export class ListedeleguesPage implements OnInit {

  lesDelegues: Delegue[] = [];

  constructor(private monServ: ApirestService) { }

  ngOnInit() {
    this.monServ.getDelegueListe().subscribe(
      value => {
        this.lesDelegues = value;
        console.log(this.lesDelegues);
      },
      error => {
        console.log("Récupération liste délégués impossible");
      }
    )
  }

}
