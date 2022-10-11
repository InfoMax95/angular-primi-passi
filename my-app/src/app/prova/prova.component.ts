import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent implements OnInit, AfterContentChecked, AfterContentInit,
AfterViewChecked, AfterViewInit, DoCheck, OnDestroy  {

  //proviamo il data-binding
  cani = [
    {
      razza: 'Golden Retriever',
      nome: 'Roger',
      descrizione: `The Shiba Inu is the smallest of the six original and distinct spitz breeds
      of dog from Japan. A small, agile dog that copes very well with mountainous terrain,
      the Shiba Inu was originally bred for hunting.`
    }
  ]

  // proprietà per testare il two-way binding
  title = 'corso-angular';

  //data-binding con property
  isDisabled = false;

  //*ngIf
  isVisible = false;
  isValid = false;

  // data-binding con event
  onClick(event: Event) {
    this.title = 'ho cliccato sul bottone';
  }

  onInput(event: Event) {
    this.title = ( (<HTMLInputElement>event.target).value);
  }

  //qua testiamo il lifecycle
  constructor() {
    console.log("costruttore");
   }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }

  // richiamo metodi che verranno istanziati in questa fase del lifecycle
  ngOnInit(): void {
    console.log("ngOnInit");
    /*
    setInterval(()=>{
      this.isDisabled = !this.isDisabled;
    }, 2000)
    */
  }

}
