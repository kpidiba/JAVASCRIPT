import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  title: string = 'this is my title';
  messagePost: string = 'message Post ';
  secondChildM: string = 'child second message';
  @Input() parent_value: string;
  @Output() message_event = new EventEmitter<string>();
  childVar: string = 'Child Value for Parent';
  pots: Array<any> = this.postService.postList;

  sendMessage() {
    this.message_event.emit(this.secondChildM);
  }

  //NOTE:   constructor declaration
  //dependency injection on constructor
  constructor(private postService: PostService, private route: ActivatedRoute) {
    this.parent_value = '';

    // let postService = new PostService();
    // this.pots = postService.postList;
  }
  //when page fully recharge
  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      console.log(value);
    });
    console.log('david');
  }
}
