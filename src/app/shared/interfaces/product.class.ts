export class Product{
  id?:number;
  authenticateId: number;
  typeProduct:TypeProducts;
  cellPhone:string;
  monthlyIncome:number;
  status?:StatusProduct;
  createdAt?:string;
  balance:number;

  constructor(id:number = 0,status:StatusProduct,createdAt:string = "",typeProduct:TypeProducts,cellPhone:string, monthlyIncome:number = 0, authenticateId:number, balance:number){
      const now = new Date();
      this.id = id;
      this.typeProduct = typeProduct;
      this.cellPhone = cellPhone;
      this.monthlyIncome = monthlyIncome;
      this.status = status;
      this.authenticateId = authenticateId;
      this.createdAt = createdAt || now.toISOString();
      this.balance = balance;
  }

}

export enum TypeProducts {
  CREDIT = 'Agile credit',
  CARD = 'Credit card',
  SAVINGS = 'Savings account',
  LEASING = 'House leasing'
}

export enum StatusProduct {
  WAITING = 'in waiting',
  INACTIVE = 'canceled',
  ACTIVE = 'active',
}


