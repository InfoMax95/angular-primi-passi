import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ServizioProvaService } from 'src/app/services/servizio-prova.service';

@Component({
  selector: 'app-contatto',
  templateUrl: './contatto.component.html',
  styleUrls: ['./contatto.component.css']
})
export class ContattoComponent implements OnInit {
  @Input() persona:any;

  id: number;

  constructor(private route: ActivatedRoute,private servizioProva: ServizioProvaService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap)=> {
      this.id = +params.get('id')!;
      this.persona = this.servizioProva.getPersona(this.id);
    });
  }

}
