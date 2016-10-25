import { Component, OnInit } from '@angular/core';

import { PostService } from '../services/post-service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postService: PostService) { }

  post = new Object();

  ngOnInit() {
    this.postService.getPost(1)
    .then(post => this.post = post);
  }

}
