<template>
  <transition appear appear-class="custom-appear-class"
              appear-to-class="custom-appear-to-class"
              appear-active-class="custom-appear-active-class">
    <div class="todo-list">
      <div class="todo-list-part">
        <add-item ref="searchResult" :submit-type="'addTodoItem'">添加</add-item>
        <List extent-option>
          <span>没有任何内容</span>
        </List>
      </div>
      <div class="todo-list-part">
        <Counter />
      </div>
    </div>
  </transition>
</template>

<script>
  import addItem from './add-item'
  import List from './List'
  import Counter from './Counter'

  export default {
    name: 'todoList',
    components: {
      Counter,
      'add-item': addItem,
      'List': List
    },
    mounted() {

    },
    computed: {

    },
    watch: {

    },
    methods: {
/*      searchItem: function ($event) {
        if ($event !== "") {
          let reg = new RegExp(`.*${$event}.*`)
          this.resultList = this.todoList.filter(item => reg.test(item.content))
          console.log(this.resultList);
        }
      }*/
    }
  }
</script>

<style scoped>
  .todo-list {
    width: 100%;
    display: flex;
    position: absolute;
    justify-content: space-evenly;
  }

  .todo-list-part {
    width: 300px;
    display: flex;
    flex-wrap: wrap;
    align-content: start;
  }

  .custom-appear-active-class {
    transition: opacity 1s;
  }

  .custom-appear-class {
    opacity: 0;
  }

  .custom-appear-to-class {
    opacity: 1;
  }
</style>
