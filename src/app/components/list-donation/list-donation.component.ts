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
    list_Donation: boolean= false;
    list:Donation[];
    kindList:Kind[];
    amountdonated = 0;
    counter = 0;
    
    

  constructor(private listofDonations:listService,
   private kindofDonations:kindService) {    
  }

  ngOnInit() {
  //  this.getdata();
    this.list = this.listofDonations.getDonation();
    this.kindList = this.kindofDonations.getkindDonation();  
    for(let lis of this.list){
      this.amountdonated+= lis.amountdonated;
      console.log(this.amountdonated);
      this.counter++;
      }
      let average = (this.amountdonated)/this.counter;
  } 
  // getdata(): void {
  //   this.listofDonations.getdata()
  //   .subscribe(this.list => this.list = this.listofDonations);
  // }
}
