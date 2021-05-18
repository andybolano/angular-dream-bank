
import { Injectable } from '@angular/core';
import { UtilitiesService } from './utilities.service';
import { SessionService } from './session.service';
import { AuthService } from './auth.service';
import { TransationService } from './transation.service';
import { ProductService } from './product.service';
import { HttpCacheService } from '@bank/core/http/httpcache.service';
import { BalanceService } from './balance.service';
import { AlertService } from './alert.service';
/**
 * Service to group all the system services
 */

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(
            public utilitiesService:UtilitiesService ,
            public sessionService:SessionService,
            public authService : AuthService,
            public transactionService: TransationService,
            public productService: ProductService,
            public balanceService: BalanceService,
            public alertService: AlertService,
            public http:HttpCacheService
            ) { }
}




