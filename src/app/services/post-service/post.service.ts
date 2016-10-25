import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Post } from '../../models/post';

@Injectable()
export class PostService {

  constructor(private http: Http) { }

  private backendUrl = "http://backend.andrew-hore.com/api/";

  getPost(id: number): Promise<Post> {
    return this.http.get(this.backendUrl + "post/" + id)
      .toPromise()
      .then(response => response.json() as Post);
  }
}
