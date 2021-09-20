import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-ambulance',
  templateUrl: './ambulance.component.html',
  styleUrls: ['./ambulance.component.css']
})


export class AmbulanceComponent implements OnInit {
  value:any;
  products: any;
  curr_state="";
  show:boolean = false;
  outhosp:any=[];
  hospnum:any=[];
  STATES = ['ARUNACHAL PRADESH','ANDHRA PRADESH','ANDAMAN AND NICOBAR ISLAND',
'ASSAM','BIHAR','CHANDIGARH','CHATTISHGARH','DELHI','DAMAN AND DIU','GOA','GUJRAT','HARYANA','HIMACHAL PRADESH',
'JHARKHAND ','JAMMU KASHMIR','KARNATAKA', 'KERALA','LADAKH','LAKSHDWEEP','MAHARASHTRA',
'MANIPUR','MADHYA PRADESH','MEGHALAYA ','MIZORAM','NAGALAND','ODISHA','PONDICHERRY','PUNJAB','RAJASTHAN',
'SIKKIM','TAMIL NADU','TELANGANA','TRIPURA','UTTAR PRADESH','UTTARAKHAND','WEST BENGAL']

  constructor(private httpClient: HttpClient) { }
  

  ngOnInit(){
    this.httpClient.get("assets/samplefile.json").subscribe(data =>{
      console.log(data);
      this.products = data;
    })
    // for(const x in this.products)
    // {
    //   this.out.push(x)
    // }
    // console.log(this.out)
  }  
  onItemSelector(event:any){
    this.outhosp=[]
    this.hospnum=[]
    console.log(event.target.innerText);
    
    for(let st in this.products){
      if(event.target.innerText==st){
        this.curr_state=st;
        this.show=true;
        // console.log(this.products[st]);
        for(let hosp in this.products[st]){
          this.outhosp.push(hosp);
          this.hospnum.push((this.products[st])[hosp])
        }
        // this.out.push(this.products[st]);
        // console.log(this.out);
      }
    }
  }
}
