import { Component, OnInit } from '@angular/core';
import { Donation } from '../../models/donation';
import { listService } from '../../services/list.service';
import { kindService } from '../../services/kind.service';
import { Kind } from '../../models/kind';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {
  private profile:Donation= {
    id:undefined,
    firstname:null,
    lastname:null,
    amountdonated:null,
    cardnumber:null,
    useremail: null,
    credit: null
   
  };
  private donate:Kind ={
    firstname: null,
  lastname: null,
  homeadress:null,
  estimatedamount: null,
  useremail: null,
  item: null,
  id:null
  };

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
  donateDetail: boolean = false;
  
  
  constructor(private listofDonations:listService,
  private kindofDonations:kindService){ }

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
      this.donateDetail = false;
    }
    donateProfile(){
      this.donateDetail = true;
      this.showinkindPageprofile = false;
      this.showCashPageprofile = false;
    }
    saveDonation(profile):void{
      this.listofDonations.save(this.profile);
      alert("Thankyou for your donation"); 
    }
    saveKindDonation(donate): void{
      this.kindofDonations.save(this.donate);
      alert("Thankyou for your donation");

    }
}
