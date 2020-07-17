<template>
  <div>
    <form v-on:submit.prevent="submit">
      <input type="text" v-on:keyup.enter="submit" v-model.trim="inputData" v-focus:123="1+ 1">
      <button>
        <slot>提交</slot>
      </button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "add-item",
    inheritAttrs: false,
    props: {
      submitType: {
        type: String,
        default: "submit"
      },

    },
    data: function () {
      return {
        inputData: ""
      }
    },
    methods: {
      submit: function () {
        this.$emit(this.submitType, this.inputData); //抛出this.inputData 父组件使用$event访问
        this.inputData = "";
      }
    },
    directives: {
      focus: {
        inserted: function (el, binding, vnode, oldVnode) {
          el.focus();
        }
      }
    }
  }
</script>

<style scoped>

</style>
