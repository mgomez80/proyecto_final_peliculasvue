const routes = [
  {
    name: "Home",
    path: "/",
    component: () => import("./pages/Home.vue"),
  },
  /*
  {
    name: "DetalleDePelicula",
    path: "/pelicula/:id",
    component: () => import("./pages/pelicula.vue"),
  },
  {
    name: "DatosDeActor",
    path: "/actor/:id",
    component: () => import("./pages/actor.vue"),
  },
  */
];

export default routes;
