import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/model/Article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit { 
  articles = [];

  constructor() { 
    for (let i = 0; i < 10; i++) {
      let article = <Article>{};
      article.title = '只想和老婆睡觉';
      article.content = '我老婆是一个身材特好，长的特好看的女生，每天都只想和她睡觉......';
      article.createDate = new Date();
      article.comments = 0;
      article.like = 0;
      this.articles.push(article);
    }
  }

  ngOnInit() {
  }

}