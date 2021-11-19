import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/rockpaperscissors",
    name: "RockPaperScissors",
    component: () => import("../views/RockPaperScissors.vue"),
  },
  {
    path: "/cardmatching",
    name: "CardMatching",
    component: () => import("../views/CardMatching.vue"),
  },
  {
    path: "/community",
    name: "Community",
    component: () => import("../views/Community.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue"),
  },
  {
    path: "/monsterslayer",
    name: "MonsterSlayer",
    component: () => import("../views/MonsterSlayer.vue"),
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
