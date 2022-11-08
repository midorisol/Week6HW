import { Component, OnInit } from '@angular/core';
import {PostsService} from "../posts.service";
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs";
import {Post} from "../models/post.model";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  post?: Post;

  constructor(private postService: PostsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      map((params: any) => +params.postId)
    ).subscribe(id => this.postService.getPostById(id).subscribe(post => this.post = post))
  }

}
