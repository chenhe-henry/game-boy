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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
