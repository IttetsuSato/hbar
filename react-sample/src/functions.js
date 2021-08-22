// ユーザIDをランダムに作成する関数  
export function randomIdGenerator(len) {  
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'  
  const name = []  
  for (let i = 0; i < len; i++) {  
    const num = Math.floor(chars.length * Math.random())  
    name.push(chars[num])  
  }  
  return name.join('')  
}  