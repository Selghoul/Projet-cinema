<template>
  <link href="Style.css.vue" rel="stylesheet">
  <div class="details">
    <h1>Details du film</h1>
    <div class="content">
      <div class = "settings-head">
        <div>
          <table>
            <tr>
              <!-- ajouter affiche film  -->
              <td v-if="details.poster_path">
                <img class="icone" v-bind:src="'http://image.tmdb.org/t/p/w500' + details.poster_path">
              </td>
              <td>
                <!-- titre film  -->
                <h2>{{details.title}}</h2>
                <!-- résumer film   -->
                <p>{{details.overview}}</p>
              </td>
            </tr>
          </table>
        </div>
      </div>

      <!-- note utilisateurs  -->
      <h2>Note des utilisateurs</h2>

      <div class="vote">
        <img src="/star.png">
        <div class="vote_bck" v-bind:style="styles"></div>
      </div>
      <b>{{(details.vote_average /2)}} / 5</b>
      <br>
      <i>Basé sur le vote de {{details.vote_count}} personnes.</i>
      <br><br>
      <div class="hr"></div>
<!--commentaire film-->
      <div class="avis">

        <div v-for='review in reviews.results' v-bind:key="review.key">
          <img v-bind:src=review.author_details.avatar_path>
          <b> {{review.author}} </b>
          <p>  {{review.content}}</p>

        </div>

      </div>

      <h2>Casting</h2>
      <table class="cast" v-for='credit in credits.cast' v-bind:key="credit.key">
        <tr>
          <td v-if="credit.profile_path"><img class="profile" v-bind:src="'http://image.tmdb.org/t/p/w500' + credit.profile_path"></td>
          <td>
            <b>{{ credit.name }}</b><br>
            {{ credit.character }}
          </td>
        </tr>
      </table>

      <div class="back">
        <h2>Crew</h2>
        <table class="cast" v-for='credit in credits.crew' v-bind:key="credit.key">
          <tr>
            <td>
              <b>{{ credit.name }}</b>
            </td>
          </tr>
        </table>
      </div>

    </div>
  </div>
</template>

<script>
  // appeler une librairie
  import axios from 'axios'
  //
  export default{
    name: 'Details',

    data: () => ({
      baseUrl: 'https://api.themoviedb.org/3',
      api_key: '9021264f48ddf90a2c1bf9c58af5d837',
      film: [],
      details: [],
      credits: [],
      reviews: [],
      load: true,
    }),
    methods: {
      //
      async getdetails() {
        const response = await axios.get(this.baseUrl + '/movie/' + this.film.id + '?language=fr&api_key=' + this.api_key);
        // https://api.themoviedb.org/3/movie/753453?language=fr&api_key=9021264f48ddf90a2c1bf9c58af5d837
        this.details = await response.data;
      },
      async getcredits() {
        const response = await axios.get(this.baseUrl + '/movie/' + this.film.id + '/credits?language=fr&api_key=' + this.api_key);
       //  https://api.themoviedb.org/3/movie/414906/credits?language=fr&api_key=9021264f48ddf90a2c1bf9c58af5d837
        this.credits = await response.data;
      },
      async getreviews() {
        const response = await axios.get(this.baseUrl + '/movie/' + this.film.id + '/reviews?api_key=' + this.api_key);
        this.reviews = await response.data;
      }
    },
    created() {
      this.film = {
        id: this.$route.query.id,
      }

      this.getdetails();
      this.getcredits();
      this.load = false;
      this.getreviews();
    },
    computed: {
      styles: function() {
        return {
          width: (this.details.vote_average * 10) + '%',
        };
      }
    }
  }

</script>

<style>
  .vote {
    height: 50px;
    width: 250px;
    background-color: #0002;
  }
  .vote div {
    top: -54px;
    background-image: linear-gradient(#ffd318,#febc08);
  }
  .vote div, .vote img {
    position: relative;
    height: 50px;
  }
  .vote img {
    z-index: 1;
  }


</style>

   <!-- <div class="content">
      <h3>{{film.titre}}</h3>
      <h3>{{film.id}}</h3>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Details',
  data(){
    return{
      film : Object,
    }
  },
  created(){
    this.film = {
      id: this.$route.query.id,
      titre: this.$route.query.titre
    }
  }
}
</script>//
-->