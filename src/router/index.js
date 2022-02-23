import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Auth from "@/views/Auth.vue";
import Favorities from "@/views/Favorities.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      layout: "main",
    },
    component: Home,
  },
  {
    path: "/auth",
    name: "authorization",
    meta: {
      layout: "auth",
    },
    component: Auth,
  },
  {
    path: "/favorities",
    name: "favorities",
    meta: {
      layout: "main",
    },
    component: Favorities,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
