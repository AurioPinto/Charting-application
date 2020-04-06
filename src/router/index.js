import Vue from "vue";
import VueRouter from "vue-router";
import svg from "../views/svg.vue";
import Home from "../views/Home.vue";
import value from "../views/value.vue";
import jikan from "../views/jikan.vue";
import clips from "../views/clips.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
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
    path: "/clips",
    name: "clips",
    component: clips
  },
  {
    path: "/value",
    name: "value",
    component: value
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
