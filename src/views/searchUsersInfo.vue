<template>
  <transition appear appear-class="custom-appear-class"
              appear-to-class="custom-appear-to-class"
              appear-active-class="custom-appear-active-class">
    <div class="container-fluid search-users">
      <div class="row-fluid">
        <div class="row-fluid">
          <Search @searchUsers="searchUsers"/>
        </div>
        <item-container :list-status="listStatus"/>
      </div>
    </div>
  </transition>
</template>

<script>
  import Search from './search'
  import itemContainer from './itemContainer'
  import eventListener from "../Utils/eventListener";
  import axios from 'axios'


  export default {
    name: "searchUsersInfo",
    components: {
      Search,
      itemContainer

    },
    mounted() {
      eventListener($);
    },
    data: function () {
      return {
        listStatus:{
          initTip: true,
          isLoading: false,
          errorMsg: '',
          userInfo: null,
        },

      }
    },
    methods: {
      searchUsers(inputData) {
        const url = `https://api.github.com/search/users?q=${inputData}`;
        this.listStatus.initTip = false;
        this.listStatus.isLoading=true;
        axios.get(url).then(response =>{
          const data = response.data;
          this.listStatus.userInfo = data.items;
          this.listStatus.isLoading=false;
        })
      },
    },
    computed: {

    },
    watch: {}
  }


</script>

<style scoped>
.search-users{
  position: absolute;
}
</style>
