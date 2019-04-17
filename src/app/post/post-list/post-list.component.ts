import { Component, OnInit } from '@angular/core';
import { PostServiceService } from 'src/app/post-service/post-service.service';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  postForm: FormGroup;
  postData = [];
  title: any;
  

  
  constructor(private postService: PostServiceService,private _route: Router,private route:ActivatedRoute) { }

  ngOnInit() {
    
    this.postData = this.postService.getPost();
    console.log(this.postData); 
 
}
  deletePost(id) {
    for (let i = 0; i < this.postData.length; i++) {
      if (id === i) {
        this.postData.splice(i, 1);
        this.postService.addPost(this.postForm.value.title, this.postForm.value.subtitle,this.postForm.value.descp,this.postForm.value.typ);
      } else {
        console.log("element cant delete");
      }
    }
  }
  // editPost(id, title, descp){

  //     for (let i = 0; i < this.postData.length; i++) {
  //       if (id === i) {
  //         let title1 = title;
  //         let descp1 = descp;
  //         //let contacttxt = document.getElementById("");
  //         this.postData[i].title = title1;
  //         this.postData[i].descp = descp1;
  //         this.postService.addPost(this.postForm.value.title, this.postForm.value.descp);
  
  //       }
  //     }
  //   }

//  
}