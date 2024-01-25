import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class CryptographicService {
  key = CryptoJS.enc.Utf8.parse('ruJRn-gee%8c2g=m');
  iv = CryptoJS.enc.Utf8.parse('uA%frBlR9tCv;f&h');
  constructor() {}
  decrypt(encryptedString: any) {
    var decrypted = CryptoJS.AES.decrypt(encryptedString, this.key, {
      keySize: 128 / 8,
      iv: this.iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
  }
}
