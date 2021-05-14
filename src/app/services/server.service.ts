
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  constructor() { }

   /**
   * Métododo para obtener la URL de conexion con el backend
   */
  getUrlBackend() {
    return environment.URL_BACKEND;
  }

}



