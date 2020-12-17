import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/model/Article.model';

@Component({
  selector: 'app-articleinfo',
  templateUrl: './articleinfo.component.html',
  styleUrls: ['./articleinfo.component.css']
})
export class ArticleinfoComponent implements OnInit {
  @Input() article: Article;
  
  constructor() { }

  ngOnInit() {
  }

}
