import {Injectable} from '@angular/core';
import { IProfile } from '@bank/shared/interfaces';
import {CookieService} from 'ngx-cookie-service';
import {UtilitiesService} from './utilities.service';

/**
 * Service to obtain general information about the application and the user
 */
@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private cookieService: CookieService,
              private utilitiesServie: UtilitiesService) {
  }



  /**
   * Method to save the authentication token
   * pendiente de encriptar
   * @param token
   */
  setToken(token: string) {
    this.cookieService.set('token', token);
  }

  /**
   * Method to obtain the authentication token
   */
  getToken(): string {
    return this.cookieService.get('token');
  }

  /**
   * Method to get the user's session
   * @returns session
   */
  getSession(): any {
      const session:any = JSON.parse(localStorage.getItem('session') || '{}');
      return (session) ? session : this.logOut();
  }

  getId():number {
    const session:IProfile = JSON.parse(localStorage.getItem('session') || '{}');
    return (session) ? session.id : -1;
  }

  /**
   * Method to store the session in the system
   * @param session cadena
   * pendiente de encriptar
   */
  setSession(session: IProfile): void {
    localStorage.setItem('session', JSON.stringify(session));
  }

  /**
   * Method to exit the system:
   * Revisar si debe estar aqui o en el auth service
   */
  logOut(): void {
    localStorage.clear();
    this.cookieService.delete('token', '/');
    this.utilitiesServie.goTo('login');
  }

  IsLogged(): boolean {
    var token = this.getToken();
    if (token != undefined && token != null && token != '') {
      return true;
    } else {
      return false;
    }
  }


}
