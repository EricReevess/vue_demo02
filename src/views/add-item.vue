<template>
  <div>
    <form class="bs-example bs-example-form" role="form" v-on:submit.prevent="submitInputVal">
    <div class="row">
      <div class="col-lg-12">
        <div class="input-group">
          <input type="text" class="form-control" v-on:key.enter="submitInputVal" v-model.trim="inputVal"/>
          <span class="input-group-btn">
              <button class="btn btn-default" type="submit">
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
  import {mapActions} from 'vuex'

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
        inputVal: ''
      }
    },
    methods: {
      ...mapActions(['Submit']),

      submitInputVal: function () {
        if (this.inputVal !== ''){
          const submitData = {
            submitType: this.submitType,
            inputVal:this.inputVal
          }
          this.Submit(submitData)
          this.inputVal = ''
        }else{
          alert('输入不能为空');
        }

      }
    },
  }
</script>

<style scoped>
  .input-group{
    width: 300px;
    margin-bottom: 10px;
  }
</style>
