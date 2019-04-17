import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostServiceService } from 'src/app/post-service/post-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  postForm: FormGroup;
  submitted = false;
  data = [];
  
  constructor(private formbuilder: FormBuilder, private postServ: PostServiceService,private router:Router) { }

  ngOnInit() {


    this.postForm = this.formbuilder.group({
      title: ['', Validators.required],
      subtitle: ['', Validators.required],
      typ: ['', Validators.required],
      descp: ['', Validators.required],

    });
  }

  get f() { return this.postForm.controls; }

  saveData() {
    this.submitted = true;

    if (this.postForm.valid) {

      this.postServ.addPost(this.postForm.value.title, this.postForm.value.subtitle,this.postForm.value.descp,this.postForm.value.typ);
      this.postForm.reset();
      
      console.log("successful");
 
    }
  }
}

