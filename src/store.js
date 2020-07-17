import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

// 模拟4个单独的模块
const state = {
  count: 0
}
const mutations = {
  //放置底层更新函数
  INCREMENT (state){
    state.count++
  },
  DECREMENT (state){
    state.count--
  }
}

const actions = {
  handelDec ({commit}) {
    commit('DECREMENT'); //提交更新给mutation
  },
  handelPlus ({commit}) {
    commit('INCREMENT');
  },
  handelPlusIfEven ({commit,state}) {
    if(state.count % 2 ===0){
      commit('INCREMENT');
    }
  },
  handelPlusAsync ({commit}) {
    setTimeout( () => {
      commit('INCREMENT');
    },2000)
  },
}
const getters = {
  evenOrOdd () {
    return state.count % 2 === 0 ? '偶数' : '奇数'
  }
}

export default new VueX.Store({
  state,
  mutations,
  actions,
  getters
})
