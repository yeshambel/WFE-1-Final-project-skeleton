import { Injectable } from '@angular/core';
import { Kind } from '../models/kind';

 @Injectable()
export class kindService {
    private kindDonation:Kind[] =[
    {
       id: 1,
        firstname: "Abebe",
       lastname: "Alemu",
       homeadress:"kesarias 11",
       estimatedamount: 500,
       useremail: "dgdgf@yahoo.com",
       item: "House"
     },
    {
        id:2,
        firstname: "Bageli",
       lastname: "Thodro",
       homeadress:"kepseli",
       estimatedamount: 12000,
       useremail: "dgdgf@yahoo.com",
       item: "Car"
     },
    {
        id:3,
        firstname: "Mack",
       lastname: "Simth",
       homeadress:"Patison 32",
       estimatedamount: 2000,
       useremail: "dgdgf@yahoo.com",
       item: "Cloth"
     },
    {
        id:4,
        firstname: "Maria",
       lastname: "Samuel",
       homeadress:"USA",
       estimatedamount: 5900,
       useremail: "dgdgf@yahoo.com",
       item: "Bible"
     },
    {
        id:5,
        firstname: "Kosta",
       lastname: "Gorgos",
       homeadress:"Perias",
       estimatedamount: 24000,
       useremail: "dgdgf@yahoo.com",
       item: "Church Material"
     },
    {
        id:6,
        firstname: "Demitry",
       lastname: "Yanes",
       homeadress:"kefisia",
       estimatedamount: 50087,
       useremail: "dgdgf@yahoo.com",
       item: "Water"
     },
    {
        id:7,
        firstname: "Eleni",
       lastname: "sami",
       homeadress:"kalitia",
       estimatedamount: 60000,
       useremail: "dgdgf@yahoo.com",
       item: "House"
     },
    {
        id:8,
        firstname: "Dr.SoS",
       lastname: "Garm",
       homeadress:"kes 23",
       estimatedamount: 8900,
       useremail: "dgdgf@yahoo.com",
       item: "Drugs"
     },
    {
        id:9,
        firstname: "Yannes",
       lastname: "Yohanis",
       homeadress:"amplo 11",
       estimatedamount: 20000,
       useremail: "dgdgf@yahoo.com",
       item: "Food"
     },
    {
        id:10,
        firstname: "Eyasu",
       lastname: "Martin",
       homeadress:"Panapstimio 12",
       estimatedamount: 97000,
       useremail: "dgdgf@yahoo.com",
       item: "House"
     }   
 ];
 getkindDonation():Kind[]{
   return this.kindDonation;
 }
 save(donate:Kind){
   this.kindDonation.push(donate);
 } 
}


