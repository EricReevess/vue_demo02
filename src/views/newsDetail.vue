<template>
  <div>
    <ul>
      <li v-for="newsItem in newsDetail" :key="newsItem.id">
        {{newsItem.title}}
        <router-link :to="{ name:'newsDetailItem',params:{id:newsItem.id,name:'ljp'}}">{{newsItem.title}}</router-link>
      </li>
    </ul>
    <router-view :newsDetail="newsDetail"></router-view>
  </div>
</template>

<script>
  export default {
    name: "newsDetail",
    data() {
      return {
        newsDetail: [
          {
            id: 1,
            title: 'yzgnb1'
          },
          {
            id: 2,
            title: 'yzgnb2'
          },
          {
            id: 3,
            title: 'yzgnb3'
          }]
      }
    }
  }
</script>

<style scoped>

</style>
