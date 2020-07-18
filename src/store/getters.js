import state from './state'

export default {
  evenOrOdd () {
    return state.count % 2 === 0 ? '偶数' : '奇数'
  }

}
