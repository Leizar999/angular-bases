import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h1>Hola Counter</h1>
  <h3>Counter: {{ counter }}</h3>
  <button (click)="increaseBy(10)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="decreaseBy(5)">-1</button>
  `
})

export class CounterComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  public counter: number = 10;

  increaseBy(value?: number): void {
    if ( value ) {
      this.counter = this.counter + value;
    } else {
      this.counter = this.counter + 1;
    }
  }

  decreaseBy(value?: number): void {
    if ( value ) {
      this.counter = this.counter - value;
    } else {
      this.counter = this.counter - 1;
    }
  }

  resetCounter() {
    this.counter = 10;
  }
}
