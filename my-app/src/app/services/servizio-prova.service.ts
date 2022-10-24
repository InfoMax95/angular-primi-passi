import { Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServizioProvaService {

  persone = [
    {nome: "luca", cognome: "rossi", isOnline: true, color: 'red'},
    {nome: "marco", cognome: "verdi", isOnline: false, color: 'blue'},
    {nome: "anna", cognome: "neri", isOnline: true, color: 'green'},
  ]

  constructor() { }

  getPersona(index: number) {
    return this.persone[index];
  }


}
