import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @ViewChild('homeForm') homeForm: NgForm
  // in questo modo prendiamo la variabile del template e possiamo direttmanete lavorare con questa variabile
  // senza passare il parametro nell'evento

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm) : void{
    console.log(this.homeForm);
  }

}
