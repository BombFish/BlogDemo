import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'useritem',
  templateUrl: './useritem.component.html',
  styleUrls: ['./useritem.component.css']
})
export class UseritemComponent implements OnInit {
  @Input() name : string;  

  constructor() {

  }

  ngOnInit() {
  }

}
