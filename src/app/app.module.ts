import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BlogFrontendRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';

import { PostService } from './services/post-service/post.service';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BlogFrontendRoutingModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
