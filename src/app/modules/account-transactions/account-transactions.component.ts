import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '@bank/services/services.service';
import { IProfile, IResult, IAccount } from '@bank/shared/interfaces';

@Component({
  selector: 'app-account-transactions',
  templateUrl: './account-transactions.component.html',
  styleUrls: ['./account-transactions.component.css']
})
export class AccountTransactionsComponent implements OnInit {

  accountSelected:IAccount = {
    id:-1,
    authenticateId: -1,
    createdAt: "",
    accountName: "",
    accountNumber: "0",
    type: "",
    currencyName: "",
    balance: "0",
    currencyCode: "",
    currencySymbol:""
  }

  profile:IProfile = this.service.sessionService.getSession();
  transactions: IAccount[] = [];
  titleTable:string = "Last Transactions";
  configTable = [
    {
        title: 'Date',
        data: 'date',
    },
    {
        title: 'Description',
        data: 'description'
    },
    {
        title: 'Currency',
        data: 'currency'
    },
    {
        title: 'Value',
        data: 'value',
    },
    {
        title: 'Balance',
        data: 'balance'
    }
  ];


  constructor(private service:ServicesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(params => {
      const urlParameters:any = params;
      const idAccount = urlParameters.params.idAccount;
      this.getTransactions(idAccount);
      this.getAccountById(idAccount);
  });
    
  }

  getTransactions(idAccount:number){
 
    this.service.transactionService.getTransactionsByAccount(this.profile.id, idAccount,(response:IResult) => {
        if (response.success) {
            this.transactions = response.content;
            if(this.transactions.length > 0){
              this.calculateTotalBalance(this.transactions);
            }
        }
    }, (errorResponse:any) => {
        console.log(errorResponse)
    })
  }

  getAccountById(idAccount:number){
    this.service.accountService.getAccountById(this.profile.id, idAccount,(response:IResult) => {
        if (response.success) {
            this.accountSelected = response.content;
        }
    }, (errorResponse:any) => {
        console.log(errorResponse)
    })
  }

  calculateTotalBalance(transactions:IAccount[]){
    this.service.accountService.calculateTotalBalance(transactions);
  }

  get accountName():string{
    return this.service.utilitiesService.hideAccountNumber(this.accountSelected.accountNumber)+" - "+this.accountSelected.accountName;
  }

}
