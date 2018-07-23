import { Injectable } from '@angular/core';
import { Donation } from '../models/donation';
import { Airtable } from '../airtable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders(
    {
    'Authorization': 'Bearer keyKSN5waI74aIlQV'    
  })
};


@Injectable()
export class listService {
   IAirtableRecordurl: any;
  constructor(private http: HttpClient) { };

    private listDonation:Donation[] =[
    {
         id: 1,
        firstname: "Abebe",
       lastname: "Alemu",
       amountdonated: 50,
        cardnumber: 34534,
       useremail: "dgdgf@yahoo.com",
       credit: "Master Card"
     },
     {
      id: 2,
        firstname: "Kebede",
       lastname: "Sisay",
       amountdonated: 1200,
        cardnumber: 5340,
       useremail: "sisy@yahoo.com",
       credit: "Visa Card"
     },
     {
        id: 3,
        firstname: "Gorge",
       lastname: "Simth",
       amountdonated: 3425,
        cardnumber: 646545,
       useremail: "smith@yahoo.com",
       credit: "Paypall"
     },
     {
        id: 4,
        firstname: "Yannes",
       lastname: "Yones",
       amountdonated: 10,
        cardnumber: 63455632,
       useremail: "yannes@yahoo.com",
       credit: "Visa Card"
     },
     {
        id: 5,
        firstname: "Elen",
       lastname: "Petros",
       amountdonated: 2000,
        cardnumber: 56534,
       useremail: "petros@yahoo.com",
       credit: "Master Card"
     },
     {
        id: 6,
        firstname: "paula",
       lastname: "Georgos",
       amountdonated: 35422,
        cardnumber: 349534,
       useremail: "georges@yahoo.com",
       credit : "Paypall"
     },
     {
        id: 7,
        firstname: "Rameres",
       lastname: "Mack",
       amountdonated: 20,
        cardnumber: 3534,
       useremail: "ramerse@yahoo.com",
       credit: "Visa Card"
     },
     {
        id: 8,
        firstname: "Yorgos",
       lastname: "Yannes",
       amountdonated: 2500,
        cardnumber: 22234,
       useremail: "yannes@yahoo.com",
       credit: "Master Card"
     },
     {
        id: 9,
        firstname: "Stefani",
       lastname: "Mark",
       amountdonated: 10,
        cardnumber: 33534,
       useremail: "stefani@yahoo.com",
       credit: "Visa Card"
     },
     {
        id: 10,
        firstname: "Maria",
       lastname: "Zufan",
       amountdonated:1000,
        cardnumber: 28883,
       useremail: "maria@yahoo.com",
       credit: "Visa Card"
     }
 ];
 getDonation():Donation[]{
   return this.listDonation;
 }
 save(profile:Donation){
   this.listDonation.push(profile);
 }
   getdata(){
 this.http.get<Airtable>(this.IAirtableRecordurl, httpOptions).subscribe
 ((data:Airtable) =>{
   this.listDonation.splice(0, this.listDonation.length)
   for(let r of data.records){
     this.listDonation.push(new Donation(
       r.fields.id,
       r.fields.firstname,
       r.fields.lastname,
       r.fields.amountdonated,
       r.fields.cardnumber,
       r.fields.useremail,
       r.fields.credit
     ));
   }
 });
}
}
