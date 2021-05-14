import { Component, OnInit } from '@angular/core';
import { ServicesService } from '@bank/services/services.service';
import { IProfile } from '@bank/shared/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  profile:IProfile = {
    id:-1,
    firtsName:"",
    lastName:"",
    lastLogin:"",
    avatar:"",
  };
  
  constructor(private service: ServicesService) { }

  ngOnInit(): void {
    this.profile = this.service.sessionService.getSession();
  }

  get fullName():string{
    return this.profile.firtsName+" "+this.profile.lastName;
  }

}

