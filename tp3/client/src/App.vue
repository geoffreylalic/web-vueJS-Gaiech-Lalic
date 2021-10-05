<template>
  <div id="app">
    <ListeRestaurant/>
  </div>
</template>

<script>

import ListeRestaurant from './components/ListeRestaurant.vue'


export default {
  name: 'App',
  components: {
    ListeRestaurant
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
  margin-top: 60px;
}
</style>
