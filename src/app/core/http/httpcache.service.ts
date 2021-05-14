import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpCacheService {
  private cache: any;

  constructor(private http: HttpClient) {
    this.cache = {};
  }

  get(timeout: number, url: string, callback: any, callbackError: any) {
    timeout *= 1000;
    const sign = 'get' + url;
    if (this.cache[sign] && this.cache[sign].isValid()) {
      callback(this.cache[sign].getData());
    } else {
      this.http.get(url)
        .subscribe((response: any) => {
          this.cache[sign] = new CacheUnit(timeout, response);
          callback(response);
        }, ({error}) => callbackError(error));
    }
  }

  post(timeout: number, url: string, data: any = null, callback: any, callbackError: any) {
    timeout *= 1000;
    const sign = 'post' + url;
    if (this.cache[sign] && this.cache[sign].isValid()) {
      callback(this.cache[sign].getData());
    } else {
      this.http.post(url, data)
        .subscribe((response: any) => {
          this.cache[sign] = new CacheUnit(timeout, response);
          callback(response);
        }, ({error}) => callbackError(error));
    }
  }

  put(timeout: number, url: string, data: any = null, callback: any, callbackError: any) {
    timeout *= 1000;
    const sign = 'put' + url;
    if (this.cache[sign] && this.cache[sign].isValid()) {
      callback(this.cache[sign].getData());
    } else {
      this.http.put(url, data)
        .subscribe((response: any) => {
          this.cache[sign] = new CacheUnit(timeout, response);
          callback(response);
        }, ({error}) => callbackError(error));
    }
  }

  delete(timeout: number, url: string, callback: any, callbackError: any) {
    timeout *= 1000;
    const sign = 'delete' + url;
    if (this.cache[sign] && this.cache[sign].isValid()) {
      callback(this.cache[sign].getData());
    } else {
      this.http.delete(url)
        .subscribe((response: any) => {
          this.cache[sign] = new CacheUnit(timeout, response);
          callback(response);
        }, ({error}) => callbackError(error));
    }
  }
}

class CacheUnit {
  born: Date;
  timeout: number;
  data: any;

  constructor(timeout: number, data: any) {
    this.born = new Date();
    this.timeout = timeout;
    this.data = data;
  }

  isValid() {
    return (new Date().getTime() - this.born.getTime()) < this.timeout;
  }

  getData() {
    return this.data;
  }
}