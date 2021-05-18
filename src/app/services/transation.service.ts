import { Injectable } from '@angular/core';
import { HttpCacheService } from '@bank/core/http/httpcache.service';
import { Transaction } from '@bank/shared/interfaces';
import { UtilitiesService } from './utilities.service';

@Injectable({
  providedIn: 'root'
})
export class TransationService {

  constructor(private utilitiesService: UtilitiesService , private http:HttpCacheService) {}

  get urlServer():string{
    return this.utilitiesService.getUrlBackend();
  }

  getTransactionsByAccount(authenticateId:number, productId:number, callback:any, callbackError:any){
    return this.http.get(0, this.urlServer + `v1/authenticate/${authenticateId}/products/${productId}/transaction`, callback, callbackError);
  }

  saveTransaction(authenticateId:number,transaction:Transaction,callback:any, callbackError:any){
    return this.http.post(0, this.urlServer + `v1/authenticate/${authenticateId}/products/${transaction.productId}/transaction`,transaction ,callback, callbackError);
  }

  filterByDate(transactions:Transaction[], start:Date, end:Date):Transaction[]{
    const result:Transaction[] = transactions.filter(a => {
      let date = new Date(a.createdAt || "");
      return (date >= start && date <= end);
    });

    return result;
  }

  calculateTotal(transactions:Transaction[]):number{
    if(transactions.length == 0){
      return 0;
    }
    const total:number = transactions.map(x => x.total || 0).reduce((a, b) => a + b );
    return total;

  }

}
