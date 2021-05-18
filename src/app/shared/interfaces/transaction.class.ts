export class Transaction {
  id?: number;
  productId: number;
  createdAt?:string;
  value: number;
  balance: number;
  commerce: string;
  tax?: number;
  total?:number;
  status?: StatusTransaction;

  constructor(id:number = 0, productId:number, createdAt:string, value:number, balance:number, commerce:string, status:StatusTransaction ){
      const now = new Date();
      this.id = id;
      this.productId = productId;
      this.createdAt = createdAt || now.toISOString();
      this.value = value;
      this.commerce = commerce;
      this.status = status;
      this.tax = this.taxValue;
      this.total = this.totalCalculate(this.value, this.tax);
      this.balance = balance - this.total;
  }

  get taxValue():number {
    return 0.19;
  }

 totalCalculate(value:number, tax:number):number {
    return  value + tax;
  }


}

export enum StatusTransaction {
  WAITING = 'in waiting',
  SUCCESS = 'success',
  REJECT = 'reject',
}
