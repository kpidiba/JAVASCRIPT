import { AfterViewInit, ChangeDetectorRef, Component ,OnInit,ViewChild} from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit   {
  parent_value:string = 'angular_basic';
  message_child: string= ""; 
  fromChildValue:string = "david";
  //property binding
  imageUrl:string = "https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg";
  //class binding
  boolColor :boolean=true;
  twoWayBinding:string ="";
  

  onKeyUp(value:HTMLInputElement){
    // console.log($event.key);
    // console.log($event.keyCode);
    console.log("value: "+value.value);
  }

  @ViewChild(PostComponent) childCompo: any;
  receiveMessage($event:string){
    this.fromChildValue =$event;
  }


  constructor(private cd :ChangeDetectorRef){
  }
  
  ngAfterViewInit(): void {
    console.log(this.childCompo);
    this.message_child = this.childCompo.childVar;
    this.cd.detectChanges();
  }
}