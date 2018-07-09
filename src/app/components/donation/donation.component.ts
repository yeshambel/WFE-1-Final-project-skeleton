import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {
  private kind =[{
    type:'Bible Book',
    image:'Bible.jpg'
  },
  {
    type:'Realestate',
    image:'House.png'
  },
  {
    type:'Clothings',
    image:'Clothes.jpg'
  },
  {
    type:'Fast Food',
    image:'Food.jpg'
  },
  {
    type:'church s.material',
    image:'cross.jpg'
  },
  {
    type:'Volentary work',
    image:'images.jpg'
  },
  {
    type:'Cars',
    image:'car.jpg'
  },
  {
    type:'Drugs',
    image:'drug.jpg'
  },
  {
    type:'Bottled water',
    image:'water.jpg'
  },
];
  private amount: string = '0';
  showProfile: boolean = false;
  showCashPageprofile: boolean= true;
  showinkindPageprofile: boolean= false;
  showform: boolean = false;
    constructor() { }
    
  
    ngOnInit() {
    }
    getamout(){return this.amount;}
    insert(x: number) {
      if (this.amount === '0') {
        this.amount = x.toString();  
      } else { 
        this.amount= x.toString(); 
      }
    }
    createProfile() {
      if(this.amount !=='0'){
      this.showProfile =true;
      this.showCashPageprofile= false;
    }else{
      return;
    }
    }
    showCashPage(){
      this.showCashPageprofile =!this.showCashPageprofile;
      this.showinkindPageprofile= false;
      this.showProfile =false;
    }
    showinkindPage(){
      this.showinkindPageprofile = true;
      this.showCashPageprofile = false;
      this.showProfile =false;
    }
}
