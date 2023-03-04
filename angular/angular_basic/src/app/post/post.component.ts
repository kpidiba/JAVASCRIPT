import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostService } from '../Services/post.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  title: string = 'this is my title';
  messagePost: string = 'message Post ';
  secondChildM:string = "child second message";
  @Input() parent_value: string;
  @Output() message_event = new EventEmitter<string>();
  childVar: string = 'Child Value for Parent';
  pots: Array<any> = this.postService.postList;
  
  sendMessage() {
    this.message_event.emit(this.secondChildM);
  }

  //NOTE:   constructor declaration
  //dependency injection on constructor
  constructor(private postService:PostService) {
    this.parent_value = '';
    // let postService = new PostService();
    // this.pots = postService.postList;
  }
  //when page fully recharge
  ngOnInit(): void {}
}
