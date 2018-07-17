import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';

import { DonationComponent } from './components/donation/donation.component';
import { ListDonationComponent } from './components/list-donation/list-donation.component';
import { listService } from './services/list.service';
import { Routes, RouterModule} from '@angular/router'
import { kindService } from './services/kind.service';



const appRoutes:Routes = [
  { path: '', redirectTo: '/donation-create', pathMatch: 'full' },
  { path: 'donation-create', component:DonationComponent },
  { path: 'list', component:ListDonationComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    DonationComponent,
    ListDonationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [listService, kindService],
  bootstrap: [AppComponent]
})
export class AppModule { }
