import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.inputSaluti);
    // qua sarà undefined perchè la view non è ancora stata inizializzata
    // e non c'è ancora il nostro figlio inputSaluti
  }

  ngAfterViewInit(): void {
    // qua invece è già stata inizializzata la view
    console.log(this.inputSaluti);
  }

  // view child indica che c'è un figlio nella view che si chiama inputSaluti
  // per essere specifici come type usiamo ElementRef
  // il punto esclamativo serve per dirgli che non sarà mai null, quindi assicuriamo un valore(pure typescript)
  // se sappiamo di che tipologia saranno gli elementi è meglio essere specifici
  // quindi per esempio di assegnare addirittura il type dell'elementRef
  // così typescript ci aiuta
  @ViewChild('inputSaluti') inputSaluti!: ElementRef<HTMLInputElement>;

  onclick() : void {
    console.log(this.inputSaluti.nativeElement.value);
  }

  colore = 'purple';

}
