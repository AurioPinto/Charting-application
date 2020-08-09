import Vue from "vue";
import VueRouter from "vue-router";
import svg from "../views/svg.vue";
import Home from "../views/Home.vue";
import history from "../views/history.vue";
import jikan from "../views/jikan.vue";
import clips from "../views/clips.vue";
import chart from "../views/chart.vue";
import value from "../views/value.vue";
import research from "../views/research.vue";
import project from "../views/project.vue";
import swap from "../views/swap.vue";



Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/jikan",
    name: "jikan",
    component: jikan
  },
  {
    path: "/svg",
    name: "svg",
    component: svg
  },
  {
    path: "/swap",
    name: "swap",
    component: swap
  },
  {
    path: "/project",
    name: "project",
    component: project
  },
  {
    path: "/research",
    name: "research",
    component: research
  },
  {
    path: "/value",
    name: "value",
    component: value
  },
  {
    path: "/",
    name: "clips",
    component: clips
  },
  {
    path: "/chart",
    name: "chart",
    component: chart
  },
  {
    path: "/history",
    name: "history",
    component: history
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
