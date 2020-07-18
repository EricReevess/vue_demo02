<template>
    <div>
      <form class="bs-example bs-example-form" role="form" v-on:submit.prevent="search">
        <div class="row">
          <div class="col-lg-6 flex">
            <div class="input-group">
              <input class="form-control" type="text" v-model.trim="inputVal" />
              <span class="input-group-btn">
              <button class="btn btn-default" type="submit">查找</button>
					  </span>
            </div>
          </div>
        </div>
      </form>
    </div>
</template>

<script>
    export default {
        name: "search",
        data:function () {
          return{
            inputVal:''
          }
        },
      methods:{
          search:function () {
              if (this.inputVal !== ''){
                this.$emit('searchUsers', this.inputVal); //抛出this.inputData
                this.inputVal = "";
              }else{
                alert('输入不能为空！');
              }
          }
      }
    }
</script>

<style scoped>
</style>
