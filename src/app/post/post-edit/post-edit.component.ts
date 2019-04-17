import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostServiceService } from 'src/app/post-service/post-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from '../post.model';



@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  postForm: FormGroup;
  postData:Post;
  title: string;
  id: any;
  descp:string;
  constructor(private postServ: PostServiceService, private route: ActivatedRoute,
    private router: Router, private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.postForm = this.formbuilder.group({
      title: ['', Validators.required],
      descp: ['', Validators.required],
      subtitle: ['', Validators.required], 
      typ: ['', Validators.required],
    });

    this.id = this.route.snapshot.paramMap.get('id');
    this.postData = this.postServ.getPostByID(this.id);
    console.log(this.postData);
    if (this.id) {
      this.postForm.setValue({
        title: this.postData.title,
        descp: this.postData.desc,
        subtitle: this.postData.subtitle,
        typ: this.postData.typ  
        
      })
    }
  }

  editPost(id) 
  {
      this.postServ.editpostById(id, this.postForm.value);
      console.log(this.postForm.value);
  }
}
  
