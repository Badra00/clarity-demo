import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radios',
  templateUrl: './radios.component.html',
  styleUrls: ['./radios.component.css']
})
export class RadiosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private data = {
    Source: "Turtle DB",
    Turtles: [
      {Name: "Amir", Age: 1.7},
      {Name: "Bettina", Age: 1.1},
      {Name: "Cho", Age: 2.5},
      {Name: "Dmitri", Age: 0.6},
    ]
  };

  // Make the first turtle active by default -- this doesn't select it in the radio group however.  
  private activeTurtle = Object.assign({}, this.data.Turtles[0]);

  private dataCode = `{
    Source: "Turtle DB",
    Turtles: [
      {Name: "Amir", Age: 1.7},
      {Name: "Bettina", Age: 1.1},
      {Name: "Cho", Age: 2.5},
      {Name: "Dmitri", Age: 0.6},
    ]
  }`;

  private radioCode = `<form>
    <section class="form-block">
      <div class="form-group">
        <label>Pick a turtle:</label>
        <div class="radio" *ngFor="let t of data.Turtles">
          <input type="radio" name="gridRadios" id="{{t.Name}}" [(ngModel)]="activeTurtle" (ngModelChange)="log()" [value]="t">
          <label [attr.for]="t.Name">{{t.Name}} (age {{t.Age}})</label>
        </div>
      </div>
    </section>
  </form>
  <p>Active item: {{activeTurtle.Name}}</p>`;

  log() {
    console.log(this.activeTurtle);
  }

}
