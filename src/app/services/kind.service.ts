import { Injectable } from '@angular/core';
import { Kind } from '../models/kind';
import { Airtable } from '../airtable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders(
    {
    'Authorization': 'Bearer keyKSN5waI74aIlQV'    
  })
};

 @Injectable()
export class kindService {
  kindDonationurl: any = "https://api.airtable.com/v0/appcGEyxRRjHCv3v5/Kinds";
  constructor(private http: HttpClient) { };
    private kindDonation:Kind[] =[];

 getkindDonation():Kind[]{
   return this.kindDonation;
 }
 submit(donate:Kind){
    this.http.post<Airtable>(this.kindDonationurl, {fields: {
      firstname:donate.firstname,
      lastname:donate.lastname,
      homeaddress:donate.homeaddress,
      estimatedamount:donate.estimatedamount,
      useremail:donate.useremail,
      item:donate.item,
    }},httpOptions).subscribe
    ((data:Airtable) =>{
      this.getdata(); 
    });
   
 } 
 getdata(){
  this.http.get<Airtable>(this.kindDonationurl,httpOptions).subscribe
 ((data:Airtable) =>{
   this.kindDonation.splice(0, this.kindDonation.length)
   for(let record of data.records){
     this.kindDonation.push(new Kind(
       record.id,
       record.fields.firstname,
       record.fields.lastname,
       record.fields.homeaddress,
       record.fields.estimatedamount,
       record.fields.useremail,
       record.fields.item
     ));
   }
 });
}
}


