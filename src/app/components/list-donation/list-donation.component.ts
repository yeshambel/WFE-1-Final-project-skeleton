import { Component, OnInit } from '@angular/core';
import { Donation } from '../../models/donation';
import { listService } from '../../services/list.service';


@Component({
  selector: 'app-list-donation',
  templateUrl: './list-donation.component.html',
  styleUrls: ['./list-donation.component.css']
})
export class ListDonationComponent implements OnInit {
    list_Donation: boolean= false;
    list:Donation[];

  constructor(private listofDonations:listService) { 
    
  }

  ngOnInit() {
    this.list = this.listofDonations.getDonation();
    
  }
  // listofDonation(){
  //   this.list_Donation = !this.list_Donation;
  // }
}
