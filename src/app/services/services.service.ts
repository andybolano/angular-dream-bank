import { Injectable } from '@angular/core';
import { UtilitiesService } from './utilities.service';


/**
 * Service to group all the system services
 */
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(public utilitiesService: UtilitiesService ) { }
}
