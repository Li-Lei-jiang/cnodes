import Vue from "vue";
import VueRouter from "vue-router";
// import Frame from "../views/Frame";
import Commom from "../views/common/Commom";
// import Home from "../views/Home"; //框架

Vue.use(VueRouter);

const routes = [
  //主页重定向
  {
    path: "/",
    redirect: "/home"
  },
  {
    //登录页
    path: "/enter",
    name: "enter",
    component: () => import("../views/enter/Enter")
  },
  {
    //首页
    path: "/home",
    component: Commom,
    children: [
      {
        path: "",
        name: "home",
        component: () => import("../views/Home")
      }
    ]
  },
  {//配置详情页
    path: "/pptvsvip", //子路由
    component:Commom,//父路由
    children: [
      {
        path: "",
        name: "pptvsvip",
        component: () => import("../views/pptvsvip/PptvSvip")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
