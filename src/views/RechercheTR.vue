<template>
    <div className="recherche">
        <form v-on:submit.prevent="recherche()">
            <div className="input-group">

                <label>Recherche</label>
                <input type="text" v-model="uneRecherche">

                <button v-on:click="recherche">search</button>
            </div>
        </form>
        <h2>Résultats de la recherche</h2>
        <table>
            <tr v-for="unFilm in films" v-bind:key="unFilm.key">
                <td>{{ unFilm.title }}</td>
                <td v-if="unFilm.poster_path!=null" width='50px'>
                    <img v-bind:src="'http://image.tmdb.org/t/p/w500' +unFilm.poster_path" ></td>
                <td>
                    <button v-on:click="voirDetails(unFilm)"> Détails</button>
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
    .input-group {
        margin-top: 1rem;
        display: flex;
        justify-content: center;
    }

    .input-group-field {
        margin-right: 0;
    }

    .input-group .input-group-button {
        margin-left: 0;
        border: none;
    }

    .input-group .md-raised {
        margin-top: 0;
        margin-bottom: 0;
        border-radius: 0;
    }
</style>
