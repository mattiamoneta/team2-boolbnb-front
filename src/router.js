const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/",
        name: "home",
        //component: TheHome,
      }
    ],
  });
  
  export { router };