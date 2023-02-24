<template>
  <div>
    <h1><p :pelicula="pelicula">{{ pelicula.Nombre }}</p></h1>
    <p><img :src="pelicula.Imagen" width="500"></p>
    <p><h4> Actores</h4></p>
    <div v-for="actor in pelicula.Actores">
      <div class="actores" @click="goToActor(actor)">
        <p :actor="actor">{{ actor }}</p>
      </div>
      
    </div>
    
    
  </div>
</template>

<script>
import axios from "axios";

export default {
  
  data() {
    return {
      pelicula : null
    };
  },

  created() {
    //console.log(this.$route)
    this.id = this.$route.params.id.toString();
    
    let href = "http://localhost:5000/peliculas/"+this.id
    //console.log(href)
    axios
      .get(href)
      .then((response) => {
        this.pelicula = response.data;
       
      })
      .catch((error) => {
        console.log("There was an error: " + error);
      });
  },
  methods: {
    goToActor(nombre){
      console.log(nombre)
      this.$router.push({name: 'datosactor', params: {id: nombre}})
    }
  },
  /*
  mounted() {
    console.log(this.$peliculas.Nombre);
  },
  */
};
</script>
