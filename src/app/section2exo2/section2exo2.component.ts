import { Component } from '@angular/core';

@Component({
  selector: 'app-section2exo2',
  templateUrl: './section2exo2.component.html',
  styleUrls: ['./section2exo2.component.css']
})
export class Section2exo2Component {
  username: string = ""
  onButtonClicked = () =>  this.username = ""
}
