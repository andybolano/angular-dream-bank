import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from '@bank/services/services.service';
import { IProfile } from '@bank/shared/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {


  profile:IProfile = {
    id:-1,
    firtsName:"",
    lastName:"",
    lastLogin:"",
    avatar:"",
  };

  totalBalance$: Observable<number> = new Observable<number>();

  constructor(private service: ServicesService) { }

  ngOnInit(): void {
   this.totalBalance$ = this.service.balanceService.getTotalBalance$();
    this.profile = this.service.sessionService.getSession();
  }

  get name():string{
    return this.profile.firtsName;
  }

  get lastLogin():string{
    return `Your last login was ${formatDate(this.profile.lastLogin,"short", "en_US")}`
  }



}
