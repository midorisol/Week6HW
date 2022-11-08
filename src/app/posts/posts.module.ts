import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostsRoutingModule} from "./posts-routing.module";
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';



@NgModule({
  declarations: [
    PostsListComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
