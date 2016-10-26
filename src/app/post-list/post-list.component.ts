import { Component, OnInit } from '@angular/core';

import { PostService } from '../services/post-service/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor(private postService: PostService) { }

  posts = new Array<Object>();

  ngOnInit() {
    this.postService.getAllPosts()
    .then(posts => this.posts = posts.reverse());
  }

}
