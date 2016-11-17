import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  constructor() { }

  private fish = [
    {Fish: "Amir", Mass: 1.2, Wins: 11},
    {Fish: "Bob", Mass: 1.8, Wins: 0},
    {Fish: "Xiao", Mass: 2.1, Wins: 2},
    {Fish: "Sara", Mass: 0.9, Wins: 4},
    {Fish: "Nitin", Mass: 0.7, Wins: 9},
  ];

  ngOnInit() {
  }

}
