import { Injectable } from '@angular/core';
import { Account} from '@bank/shared/interfaces';
import { Observable, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  private totalBalance$ = new BehaviorSubject(this.getTotalBalance());

calculateTotalBalance(accounts:Account[]):void{
  const total:number = accounts.map(x => x.balance).reduce((a, b) => a + b );
  this.saveTotalBalance(total);
  this.totalBalance$.next(total);
}

removeTotalBalance(){
  sessionStorage.removeItem('totalBalance');
  this.totalBalance$.next(0);
}
getTotalBalance$():Observable<number>{
  return this.totalBalance$.asObservable();
}

saveTotalBalance(value:number):void{
    sessionStorage.setItem('totalBalance',value.toString())
}

getTotalBalance():number{
  return Number(sessionStorage.getItem('totalBalance')) || 0;
}

}
