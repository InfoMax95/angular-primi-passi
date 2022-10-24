import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServizioProvaService } from 'src/app/services/servizio-prova.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  persone: any;
  persona: any;

  constructor(private servizioProva: ServizioProvaService) { }

  ngOnInit(): void {
   this.persone = this.servizioProva.persone;
  }
}
