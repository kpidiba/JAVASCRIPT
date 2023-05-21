import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  constructor( private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      let id = value.get('id');
      let title = value.get('title');
      console.log("id: "+id);
      console.log("title: "+title);
    });
    this.route.queryParamMap.subscribe((value) => {
      let id = value.get('id');
      let title = value.get('title');
      console.log("id: "+id);
      console.log("title: "+title);
    });
  }

}
