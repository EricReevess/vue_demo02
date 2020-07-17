<template>
  <div>
    <hr>
    <p>id:{{news.id}}</p>
    <p>title:{{news.title}}</p>
  </div>
</template>

<script>
  export default {
    name: "newsDetailItem",
    props:{
      newsDetail: {
        type:Array,
        default:[]
      }
    },
    data() {
      return{

        }
    },
    computed: {
      news:function () {
        return this.newsDetail.find( item => item.id == parseInt(this.$route.params.id))
      }
    },
    watch:{
      $route(to,from){
        console.log(to)
        console.log(from)
      }
    }
  }
</script>

<style scoped>

</style>
