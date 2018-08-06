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
  private listDonation:Donation[] =[];
  public amountdonated: number = 0;
  public counter:number = 0;
  listDonatioinUrl: any = 'https://api.airtable.com/v0/appcGEyxRRjHCv3v5/Donations';
  constructor(private http: HttpClient) { };
  
 getDonation():Donation[]{
   return this.listDonation;
 }
 submit(profile:Donation){
 return this.http.post<Airtable>(this.listDonatioinUrl, {fields: { 
    firstname:profile.firstname,
    lastname:profile.lastname,
    amountdonated:profile.amountdonated,
    cardnumber:profile.cardnumber,
    useremail:profile.useremail,
    credit:profile.credit,
  }},httpOptions).subscribe
  ((data:Airtable) =>{
    this.getdata(); 
  });
 
 }
  getdata(){
 return this.http.get<Airtable>(this.listDonatioinUrl,httpOptions).subscribe
 ((data:Airtable) =>{
   this.listDonation.splice(0, this.listDonation.length)
   for(let record of data.records){
     this.listDonation.push(new Donation(
       record.id,
       record.fields.firstname,
       record.fields.lastname,
       record.fields.amountdonated,
       record.fields.cardnumber,
       record.fields.useremail,
       record.fields.credit
     ));  
   }
 });
}
}
