import { Injectable } from '@angular/core';
import { Gesact } from '../models/gesact';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class LocalstoreService {
  key: string = 'gesact';

  constructor(public store: Storage) { }

  public async lire(){
    return await this.store.get(this.key);
  }

  public async creer(gesact: Gesact){
    return await this.store.set(this.key, gesact);
  }

  public async supprimer(){
    return await this.store.remove(this.key);
  }
}
