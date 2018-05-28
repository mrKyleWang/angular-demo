import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  imgUrl: string = "http://placehold.it/400x220";

  size: number = 2;

  divClassStr: string;

  isBig: boolean = false;

  divClass: any = {
    a: false,
    b: false,
    c: false
  }

  isDev: boolean = false;

  divStyle: any = {
    color: 'red',
    background: 'yellow'
  }

  name:string;

  constructor() {
    setTimeout(() => {
      this.divClassStr = "a b c";
      this.isBig = true;
      this.divClass = {
        a: true,
        b: true,
        c: true
      }
      this.isDev = true;
      this.divStyle = {
        color: 'yellow',
        background: 'red'
      }
      this.name="Tom";
    }, 2000)
  }

  ngOnInit() {
  }

  doOnClick(event: any) {
    console.log(event);
  }

  doOnInput(event: any) {
    console.log(event.target.value);
    console.log(event.target.getAttribute('value'));
  }
}
