import { Component, OnInit, ViewChild } from '@angular/core';
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
    id:null,
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
  homeaddress:null,
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
  goback: boolean = false;
  gobackkindprofile: boolean = false;
  @ViewChild('profileForm') profileForm;
  @ViewChild('donateForm') donateForm;
  amountdonated:number = 0;
  estimatedamount:number = 0;
  counter: number = 0;
  counter2:number = 0;
  cash: Donation[];
  kinddonation:Kind[];

  
  constructor(private listofDonations:listService,
  private kindofDonations:kindService){
    listofDonations.getdata();
    kindofDonations.getdata();

      
   }

  ngOnInit() {
    this.cash = this.listofDonations.getDonation();
    for(let lis of this.cash){
      this.amountdonated+= lis.amountdonated;
      this.counter++;
      }
    this.kinddonation = this.kindofDonations.getkindDonation();
    for(let kin of this.kinddonation){
      this.estimatedamount+= kin.estimatedamount;
      this.counter2++;
      }
  }
    getamount(){return this.amount;}
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
      let donations = new Donation(
        '-',
        profile.firstname,
        profile.lastname,
        profile.amountdonated,
        profile.cardnumber,
        profile.useremail,
        profile.credit
      );
      this.listofDonations.submit(donations);
      this.goback = true
      this.showProfile = false;
      this.profileForm.reset(); 
    }
    back(){
      this.goback = false;
      this.showCashPageprofile = true;

    }
    saveKindDonation(donate):void{
      let kinds = new Kind(
        '-',
        donate.firstname,
        donate.lastname,
        donate.homeaddress,
        donate.estimatedamount,
        donate.useremail,
        donate.item
      );
      this.kindofDonations.submit(kinds);
      this.gobackkindprofile = true;
      this.donateDetail = false;
      this.donateForm.reset();
    }

    backKindProfile(){
      this.gobackkindprofile = false;
      this.showinkindPageprofile = true;
    }
    addDonation(type:string){
      this.kind.push({
       type:type,
       image:'evolution.jpg'
      });
    }
    
}
