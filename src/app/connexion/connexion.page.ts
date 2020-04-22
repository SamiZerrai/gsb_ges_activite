import { Component, OnInit } from '@angular/core';
import { ApirestService } from '../services/apirest.service';
import { LocalstoreService } from '../services/localstore.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Gesact } from '../models/gesact';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  public gesacts: Gesact;

  constructor(private monServ: ApirestService, private monServiceStore: LocalstoreService, private router: Router, private monToast: ToastController) { }

 async ngOnInit() {
  this.gesacts = await this.monServiceStore.lire();

  if (this.gesacts != null) {
    let datelocalstorage = new Date(this.gesacts.datederniereconnexion);
    let dateheureactuel = new Date();
    let dureeconnexenminute = (dateheureactuel.getTime() - datelocalstorage.getTime()) / 60000;

    if (dureeconnexenminute < 60){
      this.router.navigateByUrl('accueil');
    }
  }

  }

  login(form){
    this.monServ.verifConnexion(form.value.ident, form.value.password).subscribe((res) => {
      if (res != null) {
        console.log(res[0]);
        this.gererLocalStore(res[0].id);
        this.router.navigateByUrl('accueil');
      } else {
        this.toastErreurConnexion();
      }
    })
  }

  async gererLocalStore(ident: number){
    let gesact = {
      id: ident,
      datederniereconnexion: new Date()
    };
    await this.monServiceStore.supprimer();
    await this.monServiceStore.creer(gesact);
  }

  async toastErreurConnexion() {
    const toast = await this.monToast.create({
      message: 'Vos informations de connexion sont incorrectes',
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }

}
