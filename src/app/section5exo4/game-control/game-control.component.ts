import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {

  @Output() gameStarted = new EventEmitter<number>()

  counter: number = 0
  timerId?: number

  startClicked = () => {
    this.timerId = setInterval(() => {
      this.gameStarted.emit(this.counter++)
    }, 1000)
  }
  stopClicked = () => {
    clearInterval(this.timerId)
  }
}
