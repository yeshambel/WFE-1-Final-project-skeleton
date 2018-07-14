import { Injectable } from '@angular/core';
import { Donation } from '../models/donation';

 @Injectable()
export class listService {

    // getLists(): Donation[] {return [ 
    private listDonation:Donation[] =[
    {
        id: 1,
        firstname: "abebe",
       lastname: "alemu",
       amountdonated: 50,
        cardnumber: 34534,
       useremail: "dgdgf@yahoo.com",
       password: "rfsf534"
     },
     {
        id: 2,
        firstname: "kebede",
       lastname: "alemu",
       amountdonated: 500,
        cardnumber: 349534,
       useremail: "dgf@yahoo.com",
       password: "ruuyf534"
     },
     {
        id: 3,
        firstname: "kebede",
       lastname: "alemu",
       amountdonated: 500,
        cardnumber: 349534,
       useremail: "dgf@yahoo.com",
       password: "ruuyf534"
     },
     {
        id: 4,
        firstname: "kebede",
       lastname: "alemu",
       amountdonated: 500,
        cardnumber: 349534,
       useremail: "dgf@yahoo.com",
       password: "ruuyf534"
     },
     {
        id: 5,
        firstname: "kebede",
       lastname: "alemu",
       amountdonated: 500,
        cardnumber: 349534,
       useremail: "dgf@yahoo.com",
       password: "ruuyf534"
     },
     {
        id: 6,
        firstname: "kebede",
       lastname: "alemu",
       amountdonated: 500,
        cardnumber: 349534,
       useremail: "dgf@yahoo.com",
       password: "ruuyf534"
     },
     {
        id: 7,
        firstname: "kebede",
       lastname: "alemu",
       amountdonated: 500,
        cardnumber: 349534,
       useremail: "dgf@yahoo.com",
       password: "ruuyf534"
     },
     {
        id: 8,
        firstname: "kebede",
       lastname: "alemu",
       amountdonated: 500,
        cardnumber: 349534,
       useremail: "dgf@yahoo.com",
       password: "ruuyf534"
     },
     {
        id: 9,
        firstname: "kebede",
       lastname: "alemu",
       amountdonated: 500,
        cardnumber: 349534,
       useremail: "dgf@yahoo.com",
       password: "ruuyf534"
     },
     {
        id: 10,
        firstname: "kebede",
       lastname: "alemu",
       amountdonated: 500,
        cardnumber: 349534,
       useremail: "dgf@yahoo.com",
       password: "ruuyf534"
     }
 ];
 getDonation():Donation[]{
   return this.listDonation;
 }
 save(profile:Donation){
   this.listDonation.push(profile);
 }
}