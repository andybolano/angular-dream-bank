import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { HttpCacheService } from '@bank/core/http/httpcache.service';
import { ICredential } from '@bank/shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private serverService : ServerService , private http:HttpCacheService) {}

  get urlServer():string{
    return this.serverService.getUrlBackend();
  }


  auth(credential: ICredential, callback:any, callbackError:any) {
     return this.http.post(0, this.urlServer + `v1/authenticate`, credential ,callback, callbackError);
  }

}
