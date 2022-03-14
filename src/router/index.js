import Vue from "vue";
import VueRouter from "vue-router";
//import HomeView from "../views/HomeView2.vue";
import HomeView from '../views/HomeView2.vue'
import BrowseView from '../views/Browse.vue'
import CartView from '../views/CartView.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: '/browse',
    name: 'BrowseView',
    component: BrowseView
  },
  {
    path: '/cart',
    name: 'CartView',
    component: CartView
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
