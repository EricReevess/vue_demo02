<template>
  <transition appear appear-class="custom-appear-class"
              appear-to-class="custom-appear-to-class"
              appear-active-class="custom-appear-active-class">
    <div class="todo-list">
      <div class="todo-list-part">
        <add-item ref="searchResult" @add="addItem($event)" :submit-type="'add'"></add-item>
        <List :todo-items="todoList" @delete="delItem($event)" extent-option>
          <span>请添加待完成事项</span>
        </List>
        <h2>已完成</h2>
        <List :todo-items="completedItems" :show-number='false'>
          <span>没有已完成的事项</span>
        </List>
      </div>
      <div class="todo-list-part">
        <add-item @search="searchItem($event)" :submit-type="'search'">
          搜索
        </add-item>
        <List :todo-items="resultList" :show-number='false'>
          <span>无结果</span>
        </List>
        <Counter />
      </div>
    </div>
  </transition>
</template>

<script>
  import addItem from './add-item'
  import List from './List'
  import localStorageUtils from "../Utils/LocalStorageUtils";
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
    data: function () {
      return {
        todoList: localStorageUtils.readData('todoList'),
        completedItems: localStorageUtils.readData('completedItems'),
        resultList: [],
        message: "http://www.baidu.com",
        attrname: "href",
        firstName: "John",
        lastName: "Reese",
        activeClass: 'active',
        errorClass: 'error',
        object: {
          name: 'ljp',
          sex: 'male',
          age: '18',
        },
        select: '',
        show: true
      }
    },
    computed: {
      todoListReverse:
        {
          get: function () {
            return this.todoList.reverse();
          },
          set: function (value) {

          }
        },
      fullName: {
        get: function () {
          return this.firstName + ' ' + this.lastName;
        },
        set: function (newVal) {
          let fullname = newVal.split(' ');
          this.firstName = fullname[0];
          this.lastName = fullname[1];
        }
      },

    },
    watch: {
      todoList: {
        deep: true,
        handler: function (newVal) {
          localStorageUtils.saveData('todoList', newVal)
        }
      },
      completedItems: function (newVal) {
        localStorageUtils.saveData('completedItems', newVal)
      }
    },
    methods: {
      addItem: function (inputData) {
        if (inputData != ""){
          if (this.todoList.findIndex((item) => item.content === inputData) === -1){
            this.todoList.push({
              content: inputData,
              isComplete: false
            })
          }
          else{
            alert("不能添加相同的事情！")
          }
        }

      },
      delItem: function ($event) {
        if ($event === -1) {
          this.todoList.splice(0, this.todoList.length)
        } else if ($event.length) {
          $event.forEach((dItem) => {
            let index = this.todoList.findIndex((item) =>
              item.content === dItem.content
            )
            this.completedItems.push(this.todoList[index]);
            this.todoList.splice(index, 1)
          })
        } else {
          this.todoList.splice($event, 1)
        }
        console.log(this.completedItems)
      },

      log: function (i) {
        console.log(i);
      },
      searchItem: function ($event) {
        if ($event != "") {
          let exp = new RegExp(`.*${$event}.*`)
          this.resultList = this.todoList.filter(item => exp.test(item.content))
          console.log(this.resultList);

        }
      },
      todoListReverse: function () {
        this.todoList = this.todoList.reverse();

      },
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
