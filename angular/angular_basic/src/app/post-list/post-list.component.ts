import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  
  postlist: Array<any>;
  constructor(private postService: PostService) {
    this.postlist = postService.postList;   
  }

  ngOnInit(): void {
  }
  addNew(){
    let newPost:Post ={
      id:5,postTitle:"Hero 7"
    }
    this.postService.addNew(newPost);
  }
}
