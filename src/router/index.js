import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import AdminView from "@/views/AdminView.vue";
import ClientView from "@/views/ClientView.vue";
import LoginView from "@/views/LoginView.vue";


Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/admin",
      name: "admin",
      component: AdminView,
    },
    {
      path: "/client",
      name: "client",
      component: ClientView,
    },
    {
      path: "/Login",
      name: "Login",
      component: LoginView,
    },
    {
      path: "/Blog",
      name: "Blog",
      component: () => import('@/views/BlogView.vue'),
    },
  ],
});

export default router;
