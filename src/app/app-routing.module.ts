import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostListComponent } from './post-list/post-list.component'
import { PostComponent } from './post/post.component'

const routes: Routes = [
  {
    path: '',
    component: PostListComponent
  },
  {
    path: ':id',
    component: PostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class BlogFrontendRoutingModule { }
