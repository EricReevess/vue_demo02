/*
* 路由模块
* */
import Vue from "vue";
import VueRouter from "vue-router";
import todoList from "../views/todoList";
import searchUsersInfo from "../views/searchUsersInfo";
Vue.use(VueRouter)
const routes = [
  {
      path: '/',
      redirect:'todo-list',
      component: {
        default:todoList,
        a:searchUsersInfo,
      }
    },
  {
    path: '/todo-list',
    component: todoList
  },
  {
    path: '/search-users',
    component: searchUsersInfo,
  },

]

export default new VueRouter({
  routes,
})
