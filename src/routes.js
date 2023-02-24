
const routes = [
  {
    name: "home",
    path: "/",
    component: () => import("./pages/ListaPeliculas.vue"),
  },
  {
    name: "listpelis",
    path: "/listapeliculas",
    component: () => import("./pages/ListaPeliculas.vue"),
  },
  {
    name: "detallepeli",
    path: "/pelicula/:id",
    component: () => import("./pages/DetallePelicula.vue"),
  },
  {
    name: "datosactor",
    path: "/actor/:id",
    component: () => import("./pages/DatosActor.vue"),
  },
  /*
  
  
  */
  
];

export default routes;
