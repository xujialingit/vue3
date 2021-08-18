import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home/index.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

const registerRouter = function (app) {
  app.use(router)
}

export default registerRouter;