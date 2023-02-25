import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onInterval(counter: number): void {
    if (counter % 2 == 0) {
      // even
      this.evenNumbers.push(counter);
    } else {
      this.oddNumbers.push(counter);
    }
    console.log('app-component counter: ' + counter);
  }
}
