import { createRouter, createWebHistory } from "vue-router";
import data from "../data.json";
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
    component: () => import("../views/Destination/Destination.vue"),
    props: true,
    beforeEnter(to) {
      const exists = data.destinations.find(
        (destination) => destination.slug === to.params.name
      );
      if (!exists) return { name: "NotFound" };
    },
    children: [
      {
        path: ":placeName/:id",
        name: "ExperienceDetails",
        component: () => import("../views/ExperienceDetails.vue"),
        props: (route) => ({ ...route.params, id: Number(route.params.id) }),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || new Promise((resolve) => {
      setTimeout(() => resolve({top:0}), 300)
    });
  },
});

export default router;
