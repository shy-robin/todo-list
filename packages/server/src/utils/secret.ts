import CryptoJs from 'crypto-js'

const SECRET_KEY = 'TODO_LIST_SECRET_KEY@ShyRobin'

export const encrypt = (value: string) => {
  return CryptoJs.AES.encrypt(value, SECRET_KEY).toString()
}

export const decrypt = (value: string) => {
  return CryptoJs.AES.decrypt(value, SECRET_KEY).toString(CryptoJs.enc.Utf8)
}
