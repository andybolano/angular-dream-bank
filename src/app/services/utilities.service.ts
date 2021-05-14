import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor(private router: Router) { }

   /**
     * Method to go to a system path
     * @param route 
     */

    goTo(route: string){
      this.router.navigate([route]);
    }
    /**
     * Method to get current system path
     */
    getRoute(){
      return this.router.url;
    }

    /**
     * method that hides the last 4 characters of the account number
     * * @param accountNumber 
     */
    hideAccountNumber(accountNumber:string):string{
        return accountNumber.slice(0,-4)+"****";
    }

}
