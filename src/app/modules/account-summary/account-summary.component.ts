import { Component, OnInit } from '@angular/core';
import { ServicesService } from '@bank/services/services.service';
import { IResult, Account, ITable, Align, Pipe, StatusProduct} from '@bank/shared/interfaces';


@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.css']
})
export class AccountSummaryComponent implements OnInit {

  accounts: Account[] = [];
  titleTable:string = "ALL ACCOUNTS";
  configTable:ITable [] =  [
    {
      title: 'Status',
      data: 'status',
      align:Align.CENTER,
      pipe:Pipe.STATUS,
    },
    {
      title: 'Created At',
      data: 'createdAt',
      align:Align.CENTER,
      pipe:Pipe.DATE,
    },
    {
        title: 'Type',
        data: 'typeProduct',
    },
    {
        title: 'Account Name',
        data: 'fullAccountName'
    },
    {
        title: 'Monthly Income',
        data: 'monthlyIncome',
        align:Align.RIGHT,
        pipe:Pipe.CURRENCY,
    },
    {
        title: 'Balance',
        data: 'balance',
        align:Align.RIGHT,
        pipe:Pipe.CURRENCY,
    }
  ];

  constructor(private service:ServicesService) { }

  ngOnInit(): void {
    this.getAccount();
  }

  getAccount(){
    let authenticateId =  this.service.sessionService.getId();
    this.service.productService.getProductsByStatus(authenticateId, StatusProduct.ACTIVE,(response:IResult) => {
        if (response.success) {
          if(response.content.length > 0){
            this.setAccounts(response.content);
          }else{
            this.service.balanceService.removeTotalBalance();
          }

          this.service.alertService.success('successfully products', 'products successfully completed')
        }
    }, (errorResponse:any) => {
      this.service.alertService.error('Error', errorResponse)

    })
  }

  setAccounts(accounts:Account[]){
    accounts.map((account) =>{
        this.accounts.push(new Account(
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
                            ));
    })

     this.calculateTotalBalance(this.accounts)
  }

  selectElement(e:any) {
    const accountSelect:Account = e;
    this.service.utilitiesService.goTo(`/account/${accountSelect.id}/transactions`)
  }

  calculateTotalBalance(accounts:Account[]){
    this.service.balanceService.calculateTotalBalance(accounts);
  }

}




