import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class PostServiceService {
  data = [
    { title: 'qwe', desc: '12312',subtitle:'asdas',typ:'audio' },
    { title: 'sqwd', desc: 'asddd',subtitle:'asdccxasas',typ:'video' }];

    postForm: FormGroup;
  postData = [];
  // private postUrl = 'api/post';
  constructor() { }

  addPost(title, desc,subtitle,typ) {
    this.data.push({ title: title, desc: desc ,subtitle: subtitle,typ:typ})
  }

  getPost() {
    return this.data;
  }

  getPostByID(id) {
    return this.data[id];
  }

  editpostById(id, data) {
    for (let i = 0; i < this.data.length; i++) {
      if (id == i) {
        this.data[i].title = data.title;
        this.data[i].desc = data.descp;
        this.data[i].subtitle = data.subtitle;
        this.data[i].typ = data.typ;
        console.log(this.data);
        // this.addPost(this.postForm.value.title, this.postForm.value.descp);
      }
    }
  }
}