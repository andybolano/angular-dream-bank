import { Component, OnInit } from '@angular/core';
import { ServicesService } from '@bank/services/services.service';
import { IProfile, IResult, IAccount } from '@bank/shared/interfaces';


@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.css']
})
export class AccountSummaryComponent implements OnInit {

  accounts: IAccount[] = [];
  titleTable:string = "ALL ACCOUNTS";
  configTable = [
    {
        title: 'Type',
        data: 'type',  
    },
    {
        title: 'Account Name',
        data: 'accountName'
    },
    {
      title: 'Account Number',
      data: 'accountNumber'
    },
    {
        title: 'Status',
        data: 'status'
    },
    {
        title: 'Currency',
        data: 'currencyCode',
    },
    {
        title: 'Balance',
        data: 'balance'
    }
  ];

  constructor(private service:ServicesService) { }

  ngOnInit(): void {
    this.getAccount();
  }


  getAccount(){
    let profile:IProfile = this.service.sessionService.getSession();
    this.service.accountService.getAccounts(profile.id,(response:IResult) => {
        if (response.success) {
            this.accounts = response.content;

            if(this.accounts.length > 0){
            this.calculateTotalBalance(this.accounts)
            }

            this.accounts.forEach(element => {
               element.accountNumber = this.service.utilitiesService.hideAccountNumber(element.accountNumber) + " - "+element.accountName;
            });
           
        }
    }, (errorResponse:any) => {
        console.log(errorResponse)
    })
  }

  selectElement(e:any) {
    const accountSelect:IAccount = e;
    this.service.utilitiesService.goTo(`/account/${accountSelect.id}/transactions`)
  }

  calculateTotalBalance(accounts:IAccount[]){
    this.service.accountService.calculateTotalBalance(accounts);
  }

}




