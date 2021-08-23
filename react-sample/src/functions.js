// ユーザIDをランダムに作成する関数  
export function randomIdGenerator(len) {  
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'  
  const name = []  
  for (let i = 0; i < len; i++) {  
    const num = Math.floor(chars.length * Math.random())  
    name.push(chars[num])  
  }  
  return name.join('')  
}  

// contents配列から任意のidを持つデータのindexを返す
export function searchIndex(id, contents) {
  const idMatching = (con) => con.id === id
  return contents.findIndex(idMatching);
}