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
     * Method to compare two values
     * @param value_1 value 1
     * @param value_2 value 2
     * @param operator operator logico ej: "!=", "=="
     */
      compareValues(value_1: any, value_2: any, operator:string){
        let response: Boolean = false;

        switch(operator){
            case "==":
                if(Array.isArray(value_1)){
                    if(value_1.includes(value_2)) response = true;
                }else{
                    if(value_1 == value_2) response = true;
                }
                break;
            case "!=":
                if(Array.isArray(value_1)){
                    if(!value_1.includes(value_2)) response = true;
                }else{
                    if(value_1 != value_2) response = true;
                }
                break;    
        }
        return response;
    }



}
