import { Component, OnInit } from '@angular/core';
import {PostsService} from "../posts.service";
import {Post} from "../models/post.model";
import {PostListItem} from "../models/post-list-item.model";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  posts: PostListItem[] = [];

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts => this.posts = posts);
  }

  deletePost(id: number) {
    this.postService.deletePostById(id).subscribe(() => {
      this.posts = this.posts.filter(post => post.id !== id);
    })
  }
}
