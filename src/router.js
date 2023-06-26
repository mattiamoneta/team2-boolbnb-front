import { createRouter, createWebHistory } from "vue-router";
import ApartmentCard from "./pages/ApartmentCard.vue";
import ApartmentsList from "./pages/ApartmentsList.vue";
import AboutUs from "./pages/AboutUs.vue";
import Support from "./pages/Support.vue";
import Home from "./pages/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/search",
      name: "search",
      component: ApartmentsList,
      props: true,
    },
    {
      path: "/apartment/:id",
      name: "apartment",
      component: ApartmentCard,
      props: true,
    },
    {
      path: "/about-us",
      name: "about-us",
      component: AboutUs,
      props: true,
    },
    {
      path: "/support",
      name: "support",
      component: Support,
      props: true,
    },
  ],
});

export { router };
