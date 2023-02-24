<template>
  <div class="app">
    <router-view class="page"></router-view>    
  </div>
</template>

<script>

//import ListaPeliculas from "./pages/ListaPeliculas.vue";
//import DetallePelicula from "./pages/DetallePelicula.vue";
export default {
  name: "App",
  components: {
    //ListaPeliculas,
  },
};

</script>

<style>
* {
  padding: 0;
  margin: 0;
}

.app {
  color: #2c3e50;
  font-family: Roboto, Arial;
}

.page {
  padding: 132px 20px;
}
</style>
