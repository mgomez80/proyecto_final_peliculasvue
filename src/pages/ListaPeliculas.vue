<template>
  <div>
    <h1>Catalogo de Peliculas</h1>
    <div class="peliculas" >
      <div v-bind:style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">
        <div v-for="pelicula in peliculas">
          <div class=" m-2" @click="goToDetallePelicula(pelicula.id)">
                <p :pelicula="pelicula"><h4>{{ pelicula.Nombre }}</h4></p>                     
                <p><img :src="pelicula.Imagen" width="250" height="250" ></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  
  data() {
    return {
      peliculas : null,
      //cuenta : cant_peliculas(), 
    };
  },

  created() {
    axios
      .get("http://localhost:5000/peliculas")
      .then((response) => {
        this.peliculas = response.data;
        //console.log(this.peliculas[0].cant)
        //cant_peli = this.peliculas[0].cant        
      })
      .catch((error) => {
        console.log("There was an error: " + error);
      });
      
  },
  methods: {
    goToDetallePelicula(id_peli){
      //console.log(id_peli)
      this.$router.push({name: 'detallepeli', params: {id: id_peli}})
    }
  },
    cant_peliculas(){
      return this.peliculas.length
    }
  /*
  mounted() {
    console.log(this.$peliculas.Nombre);
  },
  */
};
</script>
