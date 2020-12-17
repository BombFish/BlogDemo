import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UseritemComponent } from './useritem/useritem.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UploadarticleComponent } from './uploadarticle/uploadarticle.component';
import { HeaderComponent } from './header/header.component';
import { ArticleComponent } from './article/article.component';
import { ArticleinfoComponent } from './articleinfo/articleinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    UseritemComponent,
    UserlistComponent,
    UploadarticleComponent,
    HeaderComponent,
    ArticleComponent,
    ArticleinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
