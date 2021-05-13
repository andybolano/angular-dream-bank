import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

//import { InformacionService } from '../../services/informacion.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        //private informacionService: InformacionService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {  
        return true;
        /*if (this.informacionService.IsLogged())  return true;
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;*/
    }
}