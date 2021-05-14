import { Injectable } from '@angular/core';
import { HttpCacheService } from '@bank/core/http/httpcache.service';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class TransationService {

  constructor(private serverService : ServerService , private http:HttpCacheService) {}

  get urlServer():string{
    return this.serverService.getUrlBackend();
  }

  getTransactionsByAccount(idProfile:number, idAccount:number, callback:any, callbackError:any){
    return this.http.get(0, this.urlServer + `v1/authenticate/${idProfile}/accounts/${idAccount}/transactions`, callback, callbackError);
  }

}
