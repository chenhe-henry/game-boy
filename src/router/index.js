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
    path: "/cardcomparsion",
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
