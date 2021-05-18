import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '@bank/services/services.service';
import { IResult, ITable, Align, Pipe, Product, StatusProduct, Account, Transaction } from '@bank/shared/interfaces';

@Component({
  selector: 'app-account-transactions',
  templateUrl: './account-transactions.component.html',
  styleUrls: ['./account-transactions.component.css']
})
export class AccountTransactionsComponent implements OnInit {

  profileId:number = this.service.sessionService.getId();

  transactions:any[] = [];
  transactionsFilter:any[] = [];
  AccountSelect:Partial<Account> = {};
  titleTable:string = "Last Transactions";
  configTable:ITable [] = [
    {
      title: 'status',
      data: 'status',
      pipe:'statusTransaction'
    },
    {
        title: 'created At',
        data: 'createdAt',
        pipe:'date'
    },
    {
        title: 'Commerce',
        data: 'commerce'
    },
    {
        title: 'Value',
        data: 'value',
        align:Align.RIGHT,
        pipe: Pipe.CURRENCY
    },
    {
      title: 'Tax',
      data: 'tax',
      align:Align.RIGHT,
      pipe: Pipe.CURRENCY
    },
    {
      title: 'Total',
      data: 'total',
      align:Align.RIGHT,
      pipe: Pipe.CURRENCY
    },
    {
        title: 'Balance',
        data: 'balance',
        align:Align.RIGHT,
        pipe: Pipe.CURRENCY
    }
  ];

  constructor(private service:ServicesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(params => {
      const urlParameters:any = params;
      const productId = urlParameters.params.productId;
       this.getTransactions(productId);
      this.getProductById(productId);
  });

  }

 getTransactions(productId:number){
    this.service.transactionService.getTransactionsByAccount(this.profileId, productId,(response:IResult) => {
        if (response.success) {
            this.transactions = response.content;
            this.transactionsFilter = [...this.transactions]
            this.service.alertService.success('successfully transactions', 'transactions successfully completed')
        }
    }, (errorResponse:any) => {
      this.service.alertService.error('Error', errorResponse)
    })
  }

  getProductById(productId:number){
    this.service.productService.getProductById(this.profileId, productId,(response:IResult) => {
        if (response.success) {
          this.setProduct(response.content);
        }
    }, (errorResponse:any) => {
        console.log(errorResponse)
    })
  }

  setProduct(account:Account):void {
   this.AccountSelect = new Account(
         account.id,
        <StatusProduct>account.status,
        account.updateAt,
        account.createdAt,
        account.accountName,
        account.accountNumber,
        account.balance,
        account.typeProduct,
        account.cellPhone,
        account.monthlyIncome,
        account.authenticateId
    )

  }

  selectDate(e:any){
    this.filterToDate(e);
  }

  filterToDate(e:any){
      const start = new Date(e.start_date+"T00:00:00");
      const end = new Date(e.end_date+"T23:59:59");
      this.transactionsFilter = this.service.transactionService.filterByDate(this.transactions,start, end);
      this.service.alertService.success('successfully Filter', 'filter completed')
  }

  get totalTransaction(){
    return this.service.transactionService.calculateTotal(this.transactionsFilter);
  }







}
