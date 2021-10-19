<template>
  <v-app>
    <Menu />
    <Recherche />
    <ListeRestaurant />
  </v-app>
</template>

<script>
import Recherche from './components/Recherche.vue'
import Menu from "./components/Menu.vue";
import ListeRestaurant from "./components/ListeRestaurant.vue";

export default {
  name: "App",


  components: {
    Recherche,
    Menu,
    ListeRestaurant
  },

  data: () => ({
    //
  }),
};
</script>
