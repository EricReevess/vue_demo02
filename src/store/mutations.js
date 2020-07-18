import localStorageUtils from '../Utils/LocalStorageUtils'
import mutationType from './mutations-type-map'
import todoList from '../views/todoList'

export default {
  //放置底层更新函数
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  },

  SAVE_DATA_TO_LOCAL_STORAGE (key, newVal) {
    localStorageUtils.saveData(key, newVal)
  },

  [mutationType.ADD_TODO_ITEM] (state, {inputVal}) {
    console.log(inputVal)
    if (state.todoList.findIndex((item) => item.content === inputVal) === -1) {
      state.todoList.push({
        content: inputVal,
        isComplete: false
      })
      localStorageUtils.saveData('todoList', state.todoList)
    } else {
      alert('不能添加相同的事情！')
    }
  },
  [mutationType.REMOVE_TODO_ITEM](state,data){
    const {index} = data
    if (index === -1) {
      state.todoList.splice(0, state.todoList.length)
    }
    if (index.length) {
      index.forEach((dItem) => {
        let index = state.todoList.findIndex((item) =>
          item.content === dItem.content
        )
        state.completedItems.push(state.todoList[index]);

        state.todoList.splice(index, 1)
      })
    } else {
      state.todoList.splice(index, 1)

    }
    localStorageUtils.saveData('todoList', state.todoList)
    localStorageUtils.saveData('completedItems', state.completedItems)
  }

}

