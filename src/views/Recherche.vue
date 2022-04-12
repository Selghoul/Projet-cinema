<template>
  <div className="recherche">
    <form v-on:submit.prevent="recherche()">
      <div className="input-group">

        <label>Recherche</label>
        <input class="bouttonRecherche1" type="text" v-model="uneRecherche">

        <button class="bouttonRecherche" v-on:click="recherche">search </button>
      </div>
    </form>
    <br/>
    <br/>
    <h2>Résultats de la recherche</h2>
    <br/>
    <br/>
    <br/>
    <table>
      <tr v-for="unFilm in films" v-bind:key="unFilm.key">
        <td class="titreFilm">{{ unFilm.title }}</td> <br>
        <td v-if="unFilm.poster_path!=null" width='200px'>
          <img v-bind:src="'http://image.tmdb.org/t/p/w500' +unFilm.poster_path" ></td>
        <br>
        <td>
          <button class="bouttonDetails" v-on:click="voirDetails(unFilm)"> Détails</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Recherche',
  data() {
    return {
      baseUrl: 'https://api.themoviedb.org/3/search/movie',
      films: [],

      uneRecherche: '',
      api_key: '4ff72c4b1b8d4ccf3356dd8ef034a6ce'
    }
  },
  methods: {
    async recherche() {
      //const response = await axios.get(this.baseUrl + `/search.json?title=${this.query}`);
      const response = await axios.get(this.baseUrl + '?api_key=' + this.api_key + '&query=' + this.uneRecherche);
      this.films = await response.data.results;

    },

    voirDetails(film) {
      this.$router.push({
        path: 'details', query: {
          id: film.id,
          titre: film.title
        }
      });
    }
  }

}
</script>

<style>



  .bouttonDetails {
    -webkit-border-radius: 28px;
    -moz-border-radius: 28px;
    border-radius: 28px;
    -webkit-box-shadow: 0px 1px 3px #8f8f8f;
    -moz-box-shadow: 0px 1px 3px #8f8f8f;
    box-shadow: 0px 1px 3px #8f8f8f;
    font-family: Arial;
    color: #ffffff;
    font-size: 20px;
    background: #42b983;
    padding: 10px 20px 10px 20px;
    text-decoration: none;
  }
.bouttonDetails:hover {
  background: #379468;
  text-decoration: none;}

  .titreFilm{
    font-family: "Open Sans";
    font-weight: bolder;
    font-size: 20px;
  }

.bouttonRecherche {

  -webkit-border-radius: 28px;
  -moz-border-radius: 28px;
  border-radius: 28px;
  -webkit-box-shadow: 0px 1px 3px #8f8f8f;
  -moz-box-shadow: 0px 1px 3px #8f8f8f;
  box-shadow: 0px 1px 3px #8f8f8f;
  font-family: Arial;
  color: #ffffff;
  font-size: 20px;
  background: #42b983;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
}
.bouttonRecherche:hover {
  background: #379468;
  text-decoration: none;}

  .bouttonRecherche1 {
    margin: 30px 8px 0px 5px;
    border-radius: 10px;
    padding-top: 10px;
    font-size: 20px;

  }


</style>
