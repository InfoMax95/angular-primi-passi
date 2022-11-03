import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // console.log(interval(1000));
    // interval(1000).subscribe(numero => { //interval è una funzione di rxjs che ritorna un numero ogni tot tempo
    //   console.log(numero);
    // })


    // ora facciamo la stessa cosa ma creandolo noi senza utilizzare interval che è una funzione di rxjs
    // creaiamo questa funzione tramite js utilizzando gli observable
    // new Observable(observer => {
    //   let count = 0;
    //   setInterval(() => {
    //     observer.next(count);
    //     count++;
    //   }, 1000);
    // }).subscribe((numero) => {
    //   console.log(numero);
    // })
  }
  title = 'my-app';


}
