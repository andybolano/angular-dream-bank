import { Injectable } from '@angular/core';
import { HttpCacheService } from '@bank/core/http/httpcache.service';
import { IAccount } from '@bank/shared/interfaces';
import { Observable, Subject , BehaviorSubject} from 'rxjs';
import { startWith } from 'rxjs/operators';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private totalBalance$ = new BehaviorSubject(0);

  constructor(private serverService : ServerService , private http:HttpCacheService) {
  }

  get urlServer():string{
    return this.serverService.getUrlBackend();
  }





  getAccounts(idProfile: number, callback:any, callbackError:any){
    return this.http.get(0, this.urlServer + `v1/authenticate/${idProfile}/accounts` ,callback, callbackError);
  }

  getAccountById(idProfile: number,idAccount:number, callback:any, callbackError:any){
    return this.http.get(0, this.urlServer + `v1/authenticate/${idProfile}/accounts/${idAccount}` ,callback, callbackError);
  }

  calculateTotalBalance(accounts:IAccount[]):void{
      const total:number = accounts.map(x => parseInt(x.balance)).reduce((a, b) => a + b );
      this.totalBalance$.next(total);
  }

  getTotalBalance$():Observable<number>{
    return this.totalBalance$.asObservable();
  }



}
