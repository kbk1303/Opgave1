import { Component, Input, OnInit } from '@angular/core';
import { TestClass } from '../test-class';
import { TestMe } from '../test-me';

@Component({
  selector: 'app-my-pal',
  templateUrl: './my-pal.component.html',
  styleUrls: ['./my-pal.component.css']
})
export class MyPalComponent implements OnInit {


  @Input() vegan: boolean = false;

  testMe: TestMe[] = [];
  testMeSingle: TestMe;
  testsome: Something = {} as Something;

  testClass: TestClass = new TestClass("name");

  test: string = "testa";

  button1 = true;
  button2 = false;

  username: string = "";

  constructor() {
    this.testMe[0] = {} as TestMe;
    this.testMe[0].name = "MyName"
    this.testMeSingle  = {name: "fgfgg"};
   }

  ngOnInit(): void {
    console.log("veganValue", this.vegan);
  }

  getDate(): string {
    let x: number = 5;
    const xx: number = 5;
    const ss: TestMe[] = [];
    ss[0] = {} as TestMe;
    ss[0].name = "Søren";
    x = 7;
    return ss[0].name;
  }
}

export interface Something {
  id: number;
}

