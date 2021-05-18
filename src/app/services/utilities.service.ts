import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor(private router: Router) { }


  getUrlBackend() {
    return environment.URL_BACKEND;
  }
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



}
