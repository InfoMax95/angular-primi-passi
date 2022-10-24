import { Component, OnInit } from "@angular/core";
import { ServizioProvaService } from "../services/servizio-prova.service";


@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})

export class MyComponentComponent implements OnInit {

  constructor(private servizioProva: ServizioProvaService) {

  }

  // persone = [
  //   {nome: "luca", cognome: "rossi", isOnline: true},
  //   {nome: "marco", cognome: "verdi", isOnline: false},
  //   {nome: "anna", cognome: "neri", isOnline: true},
  // ]

  isVisible: boolean = false;

  ngOnInit(): void {
    console.log("prova component service",this.servizioProva.persone);
  }

  onClick(): void {
    this.isVisible = !this.isVisible;
  }

  enter(event:Event) {
    console.log((<HTMLInputElement>event.target).value);
  }
}
