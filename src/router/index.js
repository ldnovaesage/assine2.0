import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import B2bView from "../views/b2b/b2bView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/b2b",
    name: "b2b",
    component: B2bView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
