import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';

import { CreatePostComponent } from './create-post/create-post.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostListComponent } from './post-list/post-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostServiceService } from '../post-service/post-service.service';

@NgModule({
  declarations: [ CreatePostComponent, PostDetailsComponent, PostListComponent, PostEditComponent],
  imports: [
    CommonModule,
    PostRoutingModule, 
    ReactiveFormsModule, 
    FormsModule
  ],
  providers: [PostServiceService]
})
export class PostModule { }
