<template>
    <div>
      <form class="form-search">
        <input class="input-medium search-query" type="text" v-model="inputData" />
        <button @click.prevent="search" type="submit" class="btn">查找</button>
      </form>
    </div>
</template>

<script>
    export default {
        name: "search",
        data:function () {
          return{
            inputData:''
          }
        },
      methods:{
          search:function () {
              if (this.inputData.trim() !== ''){
                this.$emit('searchUsers', this.inputData); //抛出this.inputData
                this.inputData = "";
              }else{
                alert('输入不能为空！');
              }
          }
      }
    }
</script>

<style scoped>

</style>
