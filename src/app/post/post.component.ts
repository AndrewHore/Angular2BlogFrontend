import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { PostService } from '../services/post-service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(
    private postService: PostService, 
    private route: ActivatedRoute,
    private location: Location 
  ) {}

  post = new Object();

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.postService.getPost(id)
      .then(post => this.post = post);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
