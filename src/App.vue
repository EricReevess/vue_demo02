<template>
  <div id="app" v-cloak>
    <div class="container">
      <div class="row clearfix">
        <div class="col-md-12 column">
          <div class="page-header">
            <h1>
              Example page header <small>Subtext for header</small>
            </h1>
          </div>
          <div class="row clearfix">
            <div class="col-md-3 column">
              <ul class="nav nav-stacked nav-pills">
                <li >
                  <router-link to="/todo-list">待办事项</router-link>
                </li>
                <li>
                  <router-link to="/search-users">搜索Git用户</router-link>
                </li>
                <li class="dropdown pull-right">
                  <a href="#" data-toggle="dropdown" class="dropdown-toggle">下拉<strong class="caret"></strong></a>
                  <ul class="dropdown-menu">
                    <li>
                      <a href="#">操作</a>
                    </li>
                    <li>
                      <a href="#">设置栏目</a>
                    </li>
                    <li>
                      <a href="#">更多设置</a>
                    </li>
                    <li class="divider">
                    </li>
                    <li>
                      <a href="#">分割线</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="col-md-9 column main-content">
              <keep-alive>
                <router-view></router-view>
              </keep-alive>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  import searchUsersInfo from './views/searchUsersInfo';
  import todoList from './views/todoList';
  import eventListener from './Utils/eventListener'
  export default {
    name: 'App',
    components: {
      searchUsersInfo,
      todoList
    },
    mounted() {
      eventListener($);
    }
  }


</script>

<style>
  [v-cloak] {
    display: none;
  }

  #app {

  }
  .main-content{
    padding: 20px;
  }

  .custom-appear-active-class {
    transition: opacity 1s;
  }

  .custom-appear-class {
    opacity: 0;
  }

  .custom-appear-to-class {
    opacity: 1;
  }
</style>
