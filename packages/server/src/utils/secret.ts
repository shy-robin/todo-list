import CryptoJs from 'crypto-js'
import { ENCRYPT_SECRET_KEY } from '../config/secret'

export const encrypt = (value: string) => {
  return CryptoJs.AES.encrypt(value, ENCRYPT_SECRET_KEY).toString()
}

export const decrypt = (value: string) => {
  return CryptoJs.AES.decrypt(value, ENCRYPT_SECRET_KEY).toString(
    CryptoJs.enc.Utf8
  )
}
