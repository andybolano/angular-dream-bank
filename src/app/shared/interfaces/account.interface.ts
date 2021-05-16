export interface IAccount{
    id:number ;
    authenticateId: number ;
    createdAt: string;
    accountName: string;
    accountNumber: string;
    type: string;
    currencyName: string;
    status:boolean;
    balance: string;
    currencyCode: string;
    currencySymbol:string;
}
