import { Injectable } from '@angular/core';
import { HttpCacheService } from '@bank/core/http/httpcache.service';
import { ICredential } from '@bank/shared/interfaces';
import { UtilitiesService } from './utilities.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private utilitiesService: UtilitiesService , private http:HttpCacheService) {}

  get urlServer():string{
    return this.utilitiesService.getUrlBackend();
  }


  auth(credential: ICredential, callback:any, callbackError:any) {
     return this.http.post(0, this.urlServer + `v1/authenticate`, credential ,callback, callbackError);
  }

}
