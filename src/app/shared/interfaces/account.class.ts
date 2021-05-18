import { Product, TypeProducts, StatusProduct } from "./product.class";

export class Account extends Product{
    updateAt:string;
    accountName:string;
    accountNumber:string;
    fullAccountName?:string;

    constructor(id:number = 0,status:StatusProduct,updateAt:string,createAt:string = "", accountName:string, accountNumber:string, balance:number, typeProduct:TypeProducts,cellPhone:string, monthlyIncome:number, authenticateId: number){
      super(id,status,createAt,typeProduct,cellPhone, monthlyIncome, authenticateId , balance );

      const now = new Date();
      this.accountName = accountName,
      this.accountNumber = accountNumber,
      this.updateAt = updateAt;
      this.fullAccountName = this.constructfullNameAccount(accountNumber, accountName);
    }


    private constructfullNameAccount(accountNumber:string , accountName:string):string{
      return this.hideAccountNumber(accountNumber)+" - "+ accountName;
    }

    private hideAccountNumber(accountNumber:string):string{
      return accountNumber.slice(0,-4)+"****";
    }
}

export class ListAccount {
   accounts:Account[];
   totalBalance:number = 0;

   constructor(accounts:Account[]){
      this.accounts = accounts;
      this.totalBalance = this.calculateTotalBalance(this.accounts);
   }

   private calculateTotalBalance(accounts:Account[]):number{
     const total:number = accounts.map(x => x.balance).reduce((a:number, b:number) => a + b );
     return total;
   }

}



