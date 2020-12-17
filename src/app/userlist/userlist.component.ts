import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  names: string[];
  constructor() { 
    this.names = ['BF', 'Zen', 'Eleven'];
  }

  ngOnInit() {
  }

}