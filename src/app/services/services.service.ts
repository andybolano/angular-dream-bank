

import { Injectable } from '@angular/core';
import { UtilitiesService } from './utilities.service';
import { SessionService } from './session.service';
import { AuthService } from './auth.service';
import { ServerService } from './server.service';
import { AccountService } from './account.service';
import { TransationService } from './transation.service';
import { HttpCacheService } from '@bank/core/http/httpcache.service';


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
            public serverService : ServerService , 
            public accountService: AccountService,
            public transactionService: TransationService,
            public http:HttpCacheService
            ) { }
}




