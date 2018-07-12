import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { resetFakeAsyncZone } from '../../../../node_modules/@angular/core/testing';


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
  // showform: boolean = false;
  donateDetail: boolean = false;
  @Output() outputtoparent = new EventEmitter<boolean>();
  
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
      this.donateDetail = false;
    }
    showinkindPage(){
      this.showinkindPageprofile = true;
      this.showCashPageprofile = false;
      this.showProfile =false;
    }
    donateProfile(){
      this.donateDetail = true;
      this.showinkindPageprofile = false;
      this.showCashPageprofile = false;
    }
    cancel(){
      this.showProfile =false;
       this.showCashPageprofile = true;
      

    }
    oncancel(){
      this.donateDetail = false;
      this.showinkindPageprofile = true;
    }
}
