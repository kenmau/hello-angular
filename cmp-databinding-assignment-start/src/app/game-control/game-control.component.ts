import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() started = new EventEmitter<number>();
  counter: number = 0;
  ref;
  

  constructor() { }

  ngOnInit(): void {
  }

  onButtonStart(): void {
    this.ref = setInterval(() => 
      {
        this.started.emit(this.counter + 1);
        this.counter++;
      }, 1000);
  }

  onButtonStop(): void {
    clearInterval(this.ref);
  }

}
