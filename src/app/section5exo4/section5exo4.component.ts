import { Component } from '@angular/core';

@Component({
  selector: 'app-section5exo4',
  templateUrl: './section5exo4.component.html',
  styleUrls: ['./section5exo4.component.css']
})
export class Section5exo4Component {
  numbers: number[] = []

  gameStarted(number: number) {
    this.numbers.push(number)
  }
}
