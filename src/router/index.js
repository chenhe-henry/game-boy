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
    path: "/games",
    name: "Games",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Games.vue"),
  },
  {
    path: "/games/rockpaperscissors",
    name: "RockPaperScissors",
    component: () => import("../views/RockPaperScissors.vue"),
  },
  {
    path: "/games/cardcomparsion",
    name: "CardComparsion",
    component: () => import("../views/CardComparsion.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
