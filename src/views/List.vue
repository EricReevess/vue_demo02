<template>
  <div class="todo-items">

    <div v-if="extentOption">
      <button class="btn btn-danger" @click="itemClear" :disabled="!todoList.length">清空</button>
      <button class="btn btn-success" @click="itemDelete(selected)" :disabled="!selected.length">已完成</button>
    </div>
    <transition-group name="list" tag="ul" class="list list-group">
      <li
        class="list-group-item"
        v-for="(item, index) in todoList"
        v-bind:key="item.content"
        v-bind:title="item.content"
      >
        <span class="item-content">
          <span>
              <input id="checkbox" type="checkbox" :value="item.content" v-model="item.isComplete" />
          </span>
          {{item.content}}
        </span>
        <button class="btn btn-warning" v-if="extentOption" v-on:click="itemDelete(index)"> 删除</button>
      </li>
      <div :key="'empty'" v-if="todoList.length === 0" class="empty-list">
        <slot> </slot>
      </div>
    </transition-group>

<!--    <transition name="list">-->
<!--      <div v-if="localTodoItem.length === 0" class="empty-list">-->
<!--        <slot></slot>-->
<!--      </div>-->
<!--    </transition>-->




    <h2 :key="'completed'">已完成</h2>

    <transition-group name="list" tag="ul" class="list list-group">
      <li
        class="list-group-item"
        v-for="(item, index) in completedItems"
        v-bind:key="item.content"
        v-bind:title="item.content"
      >
          <span class="item-content">
                <span>{{index+1}}</span>
                {{item.content}}
          </span>
      </li>
      <div :key="'empty'" v-if="completedItems.length === 0" class="empty-list">
        <slot> </slot>
      </div>
    </transition-group>


  </div>
</template>

<script>
  import {mapActions, mapState} from 'vuex'

  export default {
    name: 'list',
    inheritAttrs: false,
    props: {
      extentOption: {
        type: Boolean,
        default: false
      },
      showNumber: {
        type: Boolean,
        default: true
      },
    },
    data: function () {
      return {
        selected: [],
      }
    },
    computed: {
      ...mapState(['todoList']),
      ...mapState(['completedItems']),
    },
    watch: {
      todoList: {
        deep: true,
        handler: function (newVal) {
          this.selected = newVal.filter((item) => item.isComplete === true)
        }
      }
    },
    created () {
      this.selected = this.todoList.filter((item) => item.isComplete === true)
    },
    methods: {
      ...mapActions(['RemoveTodoItem']),
      itemDelete: function (index) {
        if (index.length) {
          if (window.confirm(`确定完成了${(this.selected.length === 1 ? ('“' + this.selected[0].content + '”') : '') + '这 ' + this.selected.length} 项吗？`)) {
              this.RemoveTodoItem(index)

          }
        } else {
          if (window.confirm(`确定要删除 ${this.todoList[index].content} 吗？`)) {
              this.RemoveTodoItem(index)

          }
        }

      },
      itemClear: function () {
        if (window.confirm(`确定要清空所有事项吗？`)) {
          this.RemoveTodoItem(-1)
        }
      },


    },
  }
</script>

<style scoped>
  .todo-items {
    width: 300px;
    position: relative;
  }

  li {
    display: flex;
    align-items: center;
    box-sizing: border-box;
  }

  .item-content {
    width: 250px;
    height: 100%;
  }

  li button {
    width: 50px;
  }

  .empty-list {
    width: 150px;
    min-height: 100px;
    position: relative;
    top: 30px;
    left: 10px;
    text-align: center;
    line-height: 30px;
  }

  .list {
    width: 300px;
    min-height: 100px;
    position: relative;
    top: 10px;
    left: 0;
    padding: 0;
  }

  .list-enter-active {
    transition: all 1s cubic-bezier(0.535, 0.220, 0.235, 1.000);
  }

  .list-leave-active {
    position: absolute;
    transition: all 1s cubic-bezier(0.535, 0.220, 0.235, 1.000);
  }

  .list-enter {
    transform: translateX(-20px);
    opacity: 0;

  }

  .list-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }

  .list-move {
    transition: all 1s cubic-bezier(0.535, 0.220, 0.235, 1.000);
  }

</style>
