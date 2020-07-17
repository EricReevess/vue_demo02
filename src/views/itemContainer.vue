<template>
  <div class="row-fluid item-container">
    <div v-if="listStatus.isLoading" class="loading">
      <div  class=" loading4">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
    </div>

    <div v-else-if="listStatus.userInfo" class="user-info">
      <item v-for="(user ,index) in listStatus.userInfo" :key="index" :user="user"/>
    </div>
    <div v-else-if="listStatus.initTip" class="item-container">
      <h3>请输入用户名进行搜索</h3>
    </div>
    <div v-else-if="listStatus.errorMsg" class="item-container">
      <h3>{{listStatus.errorMsg}}</h3>
    </div>
  </div>
</template>

<script>
  import item from './item'

  export default {
    name: "item-container",
    props: {
      listStatus:{
        type: Object
      }
    },
    components: {
      item
    },
    data: function () {
      return {

      }
    }
  }
</script>

<style scoped>
  .item-container {
    min-height: 500px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: start;
  }
  .user-info{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-content: start;
  }
  .loading{
    width: 100%;
    height: 500px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
  }
  .loading4 {
    width: 110px;
    height: 110px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }


  .loading4 .item {
    width: 30px;
    height: 30px;
    opacity:0;
    background: #eb4d4b;
  }

  .loading4 .item:nth-child(1) {
    animation: loading4 4s infinite;
  }

  .loading4 .item:nth-child(2) {
    animation: loading4 4s 0.3s infinite;
  }

  .loading4 .item:nth-child(3) {
    animation: loading4 4s 0.6s infinite;
  }

  .loading4 .item:nth-child(4) {
    animation: loading4 4s 0.9s infinite;
  }

  .loading4 .item:nth-child(5) {
    animation: loading4 4s 1.2s infinite;
  }

  .loading4 .item:nth-child(6) {
    animation: loading4 4s 1.5s infinite;
  }

  .loading4 .item:nth-child(7) {
    animation: loading4 4s 1.8s infinite;
  }

  .loading4 .item:nth-child(8) {
    animation: loading4 4s 2.1s infinite;
  }

  .loading4 .item:nth-child(9) {
    animation: loading4 4s 2.4s infinite;
  }

  @keyframes loading4 {
    0%,
    55%,
    100% {
      transform: translateY(20px);
      opacity: 0;
    }
    15%,
    45% {
      transform: translateY(0px);
      opacity: 1;
    }
  }
</style>
