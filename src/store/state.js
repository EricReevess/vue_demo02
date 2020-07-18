import localStorageUtils from '../Utils/LocalStorageUtils'

export default {
  count: 0,
  todoList: localStorageUtils.readData('todoList'),
  completedItems: localStorageUtils.readData('completedItems'),
  resultList: [],
}
