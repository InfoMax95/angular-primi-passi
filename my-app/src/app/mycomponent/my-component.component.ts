import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})

export class MyComponentComponent implements OnInit {

  constructor() {

  }

  isVisible: boolean = false;

  ngOnInit(): void {

  }

  onClick(): void {
    this.isVisible = !this.isVisible;
  }

  enter(event:Event) {
    console.log((<HTMLInputElement>event.target).value);
  }
}
