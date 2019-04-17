import { Component, OnInit } from '@angular/core';
import { PostServiceService } from 'src/app/post-service/post-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post.model';



@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  
postForm:FormGroup;
postData:Post;

id:any;

  constructor(private postServ:PostServiceService, private route: ActivatedRoute,
    private formbuilder: FormBuilder) { }

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
  }}