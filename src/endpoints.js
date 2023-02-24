export default {
    getDefaultEndpoint(endpoint){
        return axios.get(endpoint)
    },

    getPeliculasList(){
        return axios.get('http://localhost:5000/peliculas')
            .then(function (response) {
            console.log(response);
            })
    }
}