import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePostComponent } from './create-post/create-post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostEditComponent } from './post-edit/post-edit.component';


const routes: Routes = [
  
              {
                path: '',
                component: CreatePostComponent
              },
              {
                path: 'post-list',
                component: PostListComponent
              },
              {
                path: 'post-details/:id',
                component: PostDetailsComponent
              },
              {
                path: 'post-edit/:id',
                component: PostEditComponent
              }
            
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
