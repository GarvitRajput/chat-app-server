import config from '../config/config';

var CryptoJS = require("crypto-js");

export default class Crypto {
  public static encrypt(data) {
    return CryptoJS.AES.encrypt(data, config.AES_KEY).toString();
  }
  public static decrypt(token) {
    return CryptoJS.AES.decrypt(token, config.AES_KEY).toString(CryptoJS.enc.Utf8);
  }

  public static hash(data){
      return CryptoJS.SHA256(data).toString();
  }
}
