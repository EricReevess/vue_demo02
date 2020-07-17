/*
* 路由模块
* */
import Vue from "vue";
import VueRouter from "vue-router";
import todoList from "../views/todoList";
import searchUsersInfo from "../views/searchUsersInfo";
import news from "../views/news";
import newsDetail from "../views/newsDetail";
import newsDetailItem from "../views/newsDetailItem";
import notFoundError from "../views/notFoundError"
Vue.use(VueRouter)
const routes = [
  {
      path: '/',
      redirect:'todo-list',
      component: {
        default:todoList,
        a:searchUsersInfo,
        b:news
      }
    },
  {
    path: '/todo-list',
    component: todoList
  },
  {
    path: '/search-users',
    component: searchUsersInfo,
    children: [
      {
        path: 'news',  //不需要斜杠默认以父路由为标准
        component: news
      },
      {
        path: 'news-detail',
        component: newsDetail,
        children:[
          {
            path:'detail/:id',
            name:'newsDetailItem',
            component:newsDetailItem
          },

        ]
      },
      {
        path:'/search-users/news-detail/detail',
        component:notFoundError
      },
      {
        path:'',
        redirect:'news'
      }
    ]
  },

]
const mainPageRouter = new VueRouter({
  routes,
})
export default mainPageRouter
