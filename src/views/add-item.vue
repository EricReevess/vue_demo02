<template>
  <div>
    <!--    <form class="bs-example bs-example-form" v-on:submit.prevent="submit">
          <input type="text" v-on:keyup.enter="submit" v-model.trim="inputData">
          <button >
            <slot>提交</slot>
          </button>
        </form>-->
    <form class="bs-example bs-example-form" role="form" v-on:submit.prevent="submit">
      <div class="row">
        <div class="col-lg-12">
          <div class="input-group">
            <input type="text" class="form-control" v-on:keyup.enter="submit" v-model.trim="inputData">
            <span class="input-group-btn">
						<button class="btn btn-default" type="button">
							<slot>提交</slot>
						</button>
					</span>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'add-item',
    inheritAttrs: false,
    props: {
      submitType: {
        type: String,
        default: 'submit'
      },

    },
    data: function () {
      return {
        inputData: ''
      }
    },
    methods: {
      submit: function () {
        this.$emit(this.submitType, this.inputData) //抛出this.inputData 父组件使用$event访问
        this.inputData = ''
      }
    },
    directives: {
      focus: {
        inserted: function (el, binding, vnode, oldVnode) {
          el.focus()
        }
      }
    }
  }
</script>

<style scoped>

</style>
