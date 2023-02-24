<template>
  <div>
    <h1><p :actor="actor">{{ actor.Nombre }}</p></h1>
    <p><img :src="actor.Foto" width="500"></p>
    <p><h4> Peliculas en las que Participo</h4></p>
    <div class="pelis" v-for="peicula in actor.Peliculas">
        <p :peicula="peicula">{{ peicula }}</p>
    </div>
    
  </div>
</template>

<script>
import axios from "axios";

export default {
  
  data() {
    return {
      actor : null
    };
  },

  created() {
    //console.log(this.$route)
    this.id = this.$route.params.id.toString();
    console.log(this.id);
    let href = "http://localhost:5000/actor/"+this.id
    //console.log(href)
    axios
      .get(href)
      .then((response) => {
        this.actor = response.data;
        
      })
      .catch((error) => {
        console.log("There was an error: " + error);
      });
  },
  /*
  mounted() {
    console.log(this.$actors.Nombre);
  },
  */
};
</script>