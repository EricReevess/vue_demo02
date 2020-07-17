<template>
  <div class="media user">
    <a :href="user.html_url" class="pull-left">
      <img :src="user.avatar_url" class="media-object" :alt="user.login"/>
    </a>
    <div class="media-body">
      <h4 class="media-heading">
        {{user.login}}
      </h4>
      <span>姓名：{{name}}</span><br>
      <span>位置：{{location}}</span><br>
      <span>简述：{{bio}}</span>
    </div>
  </div>

</template>

<script>
  import axios from 'axios'
  export default {
    name: "item",
    props:{
      user:Object
    },
    data (){
      return{
        name:'',
        location:'',
        bio:'',

      }
    },
    computed:{

    },
    mounted() {
      axios.get(this.user.url).then(response => {
        this.name = response.data.name || 'N/A';
        this.location = response.data.location || 'N/A';
        this.bio = response.data.bio || 'N/A';
      })
    }
  }
</script>

<style scoped>
  .user {
    width: 300px;
    height: 100px;
    margin-right: 15px;
    margin-top: 10px;
  }

  .user img {
    width: 100px;
    height: 100px;
    box-sizing: border-box;
    border: 2px solid #83bb90;
    border-radius: 50%;
  }
</style>
