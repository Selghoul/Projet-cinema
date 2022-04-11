<template>
  <div id="nav">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      barBasicExample" class="navbar-menu">
      <div class="navbar-start">  <div id="nav

          <a class="navbar-item">
        <router-link to="/">Acceuil</router-link>
        </a>

        <a class="navbar-item">
          <router-link to="/recherche">Recherche</router-link>
        </a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            More
          </a>


        </div>
      </div>


  </div>
  </nav>
  <router-link to="/">Acceuil</router-link> |
  <router-link to="/recherche">Recherche</router-link>
  </div>
  <router-view/>

</template>

<script>
  export default {
    name: 'App',
    methods : {
      getList(){
        this.axios.get(api).then((response) => {
          console.log(response.data)
        })
      }
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
