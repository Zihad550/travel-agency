import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/destination/:name",
    name: "Destination",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Destination/Destination.vue"
      ),
    props: true,
    children: [
      {
        path: ":name/:id",
        name: "ExperienceDetails",
        component: () => import("../views/ExperienceDetails.vue"),
        props: (route) => ({ ...route.params, id: Number(route.params.id) }),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
