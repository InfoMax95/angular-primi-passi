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
  }

  ngAfterViewInit(): void {
    console.log(this.inputSaluti);
  }

  @ViewChild('inputSaluti') inputSaluti!: ElementRef

}
