import mutationType from './mutations-type-map'
export default {
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
  Submit({commit},data){
    console.log(data)
    if (data.submitType === 'addTodoItem'){
      commit(mutationType.ADD_TODO_ITEM,{inputVal:data.inputVal}) //数据会包装成对象
    }

  },
  RemoveTodoItem({commit},index){
    commit(mutationType.REMOVE_TODO_ITEM,{index})
  },
  searchItem({commit}){

  }
}
