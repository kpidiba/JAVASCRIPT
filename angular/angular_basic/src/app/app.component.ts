import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { PostComponent } from './post/post.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    const obsTest = new Observable((observer) => {
      //NOTE: can return many data
      observer.next('Returned of observalble');
      observer.next('Returned of observalble one');
      observer.next('Returned of observalble two');
      console.log('printed from observable');
    }).subscribe((value) => console.log(value));
    obsTest.unsubscribe();
  }
}
// export class AppComponent implements AfterViewInit   {
//   parent_value:string = 'angular_basic';
//   message_child:string= "";
//   fromChildValue:string = "david";
//   //property binding
//   imageUrl:string = "https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg";
//   //class binding
//   boolColor :boolean=false;
//   twoWayBinding:string ="";
//   listPost :Array<string>  = ["dva","dkdk","hello","world","I am the user","chadding"];
//   listObject: Array<any> = [{id:1,name:"yollow"},{id:2,name:"bollow"},{id:3,name:"hollow"}];
//   @ViewChild(PostComponent) childCompo: any;
//   stepForm:string="";
//   pipv:string = "pipe value";
//   count :number = 12345;
//   dcount:number = 4.3;
//   today:Date = new Date();
//   davidO:object ={
//     id:1,
//     name:"David"
//   }

//   onKeyUp(value:HTMLInputElement){
//     // console.log($event.key);
//     // console.log($event.keyCode);
//     // console.log("value: "+value.value);
//   }

//   receiveMessage($event:string){
//     this.fromChildValue =$event;
//   }

//   sendStep(value:string){
//     this.stepForm = value;
//   }

//   addNew(){
//     this.listObject.push({id:6,name:"hello"});
//   }

//   onDelete(obj:any,i:number){
//     this.listObject.splice(i,1);
//   }

//   constructor(private cd :ChangeDetectorRef){

//   }

//   ngAfterViewInit(): void {
//     // console.log(this.childCompo);
//     // this.message_child = this.childCompo.childVar;
//     this.cd.detectChanges();
//   }
// }
