import { Component, OnInit } from '@angular/core';
import { Donation } from '../../models/donation';
import { listService } from '../../services/list.service';
import { kindService } from '../../services/kind.service';
import { Kind } from '../../models/kind';


@Component({
  selector: 'app-list-donation',
  templateUrl: './list-donation.component.html',
  styleUrls: ['./list-donation.component.css']
})
export class ListDonationComponent implements OnInit {
    list:Donation[];
    kindList:Kind[];
  
  constructor(private listofDonations:listService,
   private kindofDonations:kindService) {    
     listofDonations.getdata();
     kindofDonations.getdata();
   }

  ngOnInit() {
    this.list = this.listofDonations.getDonation();
    this.kindList = this.kindofDonations.getkindDonation();  
  } 
}
