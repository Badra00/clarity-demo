import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {

  constructor() { }

  private toggles = [false, false, false];

  ngOnInit() {
  }

  nTogs() {
    return this.toggles.reduce(function(sum, i) {
      if (i) {
        return sum + 1;
      } else {
        return sum;
      }
    }, 0);
  }

}
