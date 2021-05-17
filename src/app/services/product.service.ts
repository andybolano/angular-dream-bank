import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { IProduct } from '@bank/shared/interfaces';
import { HttpCacheService } from '@bank/core/http/httpcache.service';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private serverService : ServerService , private http:HttpCacheService) {}

  get urlServer():string{
    return this.serverService.getUrlBackend();
  }

  saveProduct(product: IProduct , callback:any, callbackError:any){
    return this.http.post(0, this.urlServer + `v1/products`,product, callback, callbackError);
  }

  getProducts(idProfile: number, callback:any, callbackError:any){
    return this.http.get(0, this.urlServer + `v1/products`, callback, callbackError);
  }

}
