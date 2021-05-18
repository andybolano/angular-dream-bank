import { Injectable } from '@angular/core';
import { UtilitiesService } from './utilities.service';
import { Product , StatusProduct, Account} from '@bank/shared/interfaces';
import { HttpCacheService } from '@bank/core/http/httpcache.service';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private utilitiesService: UtilitiesService , private http:HttpCacheService) {}

  get urlServer():string{
    return this.utilitiesService.getUrlBackend();
  }

  saveProduct(product: Product , callback:any, callbackError:any){
    return this.http.post(0, this.urlServer + `v1/authenticate/${product.authenticateId}/products`,product, callback, callbackError);
  }
  getProducts(authenticateId: number, callback:any, callbackError:any){
    return this.http.get(0, this.urlServer + `v1/authenticate/${authenticateId}/products`, callback, callbackError);
  }

  getProductsByStatus(authenticateId: number, status:StatusProduct , callback:any, callbackError:any){
    return this.http.get(0, this.urlServer + `v1/authenticate/${authenticateId}/products?status=${status}`, callback, callbackError);
  }
  getProductById(profileId: number,productId: number, callback:any, callbackError:any){
    return this.http.get(0, this.urlServer + `v1/authenticate/${profileId}/products/${productId}`, callback, callbackError);
  }

  updateProduct(profileId:number, product:Product, callback:any, callbackError:any){
    return this.http.put(0, this.urlServer + `v1/authenticate/${profileId}/products/${product.id}`, product, callback, callbackError);
  }


}
