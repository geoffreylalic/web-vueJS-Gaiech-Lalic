<template>
  <v-app>
    <Menu />
    <Header />
    <Recherche />
    <ListeRestaurant />
  </v-app>
</template>

<script>
import Recherche from './components/Recherche.vue'
import Header from "./components/Header.vue";
import Menu from "./components/Menu.vue";
import ListeRestaurant from "./components/ListeRestaurant.vue";

export default {
  name: "App",


  components: {
    Header,
    Recherche,
    Menu,
    ListeRestaurant
  },

  data: () => ({
    //
  }),
};
</script>
