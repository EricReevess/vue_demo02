export default {
  saveData(key,data){
    window.localStorage.setItem(key,JSON.stringify(data))
  },
  readData(key){
    return JSON.parse(window.localStorage.getItem(key) || '[]')
  }
}
