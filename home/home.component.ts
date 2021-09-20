import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  val:any;
  show: any;
  constructor() {
    
   }

  ngOnInit(): void {
   
  }
  sendMsg(val){
    console.log(val);
  }
  
}


