import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Post} from "./models/post.model";
import {map, Observable} from "rxjs";
import {PostListItem} from "./models/post-list-item.model";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts():Observable<PostListItem[]> {
  return this.http.get<Post[]>(`${environment.postApiBaseUrl}`)
    .pipe(
    map(posts => posts.filter((post, index) => index < 10)),
    map(posts => posts.map(post => new PostListItem(post.id, post.title)))
    )
  }

  getPostById(id: number){
  return this.http.get<Post>(`${environment.postApiBaseUrl}/${id}`)
  }

  deletePostById(id: number){
    return this.http.delete<{}>(`${environment.postApiBaseUrl}/${id}`)
  }
}
