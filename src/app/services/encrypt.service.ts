import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import sha1 from 'sha1';

/**
 * Servicio para la encriptacion y desencriptacion de cadenas
 */
@Injectable({
    providedIn: 'root'
})
export class EncryptService {

    constructor() { }

    /**
     * Encriptacion AES
     * @param cadena texto a encriptar
     * @param key clave de encriptacion
     * 
     * @returns cadena encriptada
     */
    encriptar(cadena:string, key:string):string {
        var ciphertext:string = "";
        if ( cadena != "" && key != null && this.isString(cadena) && this.isString(key)) {
            ciphertext = CryptoJS.AES.encrypt(JSON.stringify({ cadena }), key).toString();
        }
        return ciphertext;
    }

    /**
     * Desencriptacion AES
     * @param cadena texto encriptado
     * @param key clave de encriptacion
     * 
     * @returns cadena desencriptada
     */
    desEncriptar(cadena:string, key:string):string {
      
        let plaintext = null;
        if ( cadena != null && key != null && this.isString(cadena) && this.isString(key)) {
            let bytes = CryptoJS.AES.decrypt(cadena, key);
            plaintext = bytes.toString(CryptoJS.enc.Utf8);
        }

        if(plaintext == null || plaintext == "") return "";

        let sr = JSON.parse(plaintext).str;
        console.log(sr);
        return sr;
    }

    /**
     * Método de encriptacion SHA1
     * @param cadena  texto a encriptar
     * 
     * @returns cadena con texto encriptado en SHA1
     */
    getSha1(cadena:string):string {
        return sha1(cadena);
    }


    /**
     * Método para verificar que un objeto es un string
     * @param value 
     * 
     * @returns resultado de la verificacion
     */
    private isString(value:any): boolean {
        return typeof value === 'string' || value instanceof String;
    }

}
