import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  
  sendMessage() {
    this.message_event.emit(this.secondChildM);
  }

  //NOTE:   constructor declaration
  constructor() {
    this.parent_value = '';
  }
  //when page fully recharge
  ngOnInit(): void {}
}
