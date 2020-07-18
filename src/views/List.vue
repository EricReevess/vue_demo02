<template>
  <div class="todo-items">

    <transition name="list">
      <div v-if="localTodoItem.length === 0" class="empty-list">
        <slot></slot>
      </div>
    </transition>

    <div v-if="localTodoItem.length !== 0 && extentOption">
      <button class="btn btn-danger" @click="itemClear">清空</button>
      <button class="btn btn-info" @click="sortItems" disabled>排序</button>
      <button class="btn btn-success" @click="itemDelete(selected)" :disabled="selected.length === 0">已完成</button>
    </div>
    <transition-group name="list" tag="ul" class="list list-group">
      <li
        class="list-group-item"
        v-for="(item, index) in localTodoItem"
        v-bind:key="item.content"
        v-bind:title="item.content"
      >
        <span class="item-content">
          <span v-if="showNumber">
              <input id="checkbox" type="checkbox" :value="item.content" v-model="item.isComplete">
          </span>
          <span v-else>
            {{index+1}}
          </span>
          {{item.content}}
        </span>
        <button class="btn btn-warning" v-if="extentOption" v-on:click="itemDelete(index)"> 删除</button>
      </li>
    </transition-group>


  </div>
</template>

<script>
  export default {
    name: "list",
    inheritAttrs: false,
    props: {
      todoItems: {
        type: Array,
        default: []
      },
      extentOption: {
        type: Boolean,
        default: false
      },
      showNumber: {
        type: Boolean,
        default: true
      }
    },
    data: function () {
      return {
        selected: []
      }
    },
    computed: {
      localTodoItem: {
        get() {
          return this.todoItems.slice(0)
        },
        set(val) {

        }
      }
    },
    watch: {
      localTodoItem: {
        deep: true,
        handler: function (newVal) {
          this.selected = newVal.filter((item) => item.isComplete === true)
        }
      }
    },
    created() {
      this.selected = this.localTodoItem.filter((item) => item.isComplete === true)
    },
    methods: {
      itemDelete: function (index) {
        if (index.length) {
          if (window.confirm(`确定完成了${(this.selected.length === 1 ? ('“' + this.selected[0].content + '”') : '') + '这 ' + this.selected.length} 项吗？`)) {
            this.$emit("delete", index);
          }
        } else {
          if (window.confirm(`确定要删除 ${this.localTodoItem[index].content} 吗？`)) {
            this.$emit("delete", index);
          }
        }

      },
      itemClear: function () {
        if (window.confirm(`确定要清空所有事项吗？`)) {
          this.$emit("delete", -1)
        }
      },
      sortItems: function () {
        this.localTodoItem = this.todoItems.sort(function (pre, next) {
          return next.level - pre.level;
        })
      }
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
    left: 0px;
    padding: 0px;
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
