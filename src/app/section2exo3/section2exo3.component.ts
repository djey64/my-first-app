import { Component } from '@angular/core';

@Component({
  selector: 'app-section2exo3',
  templateUrl: './section2exo3.component.html',
  styleUrls: ['./section2exo3.component.css']
})
export class Section2exo3Component {
  displayParagraph = true
  buttonHistory: number[] = []

  toggleDisplayParagraph = () => {
    this.displayParagraph = !this.displayParagraph
    this.buttonHistory.push(Date.now())
  }

  isFifthOrMore = (timeStamp: number) => this.buttonHistory.indexOf(timeStamp) >= 5
}
