<template>
  <v-app>
    <Menu/>
    <Recherche/>
    <ListeRestaurant />
  </v-app>
</template>

<script>

import Menu from "./Menu.vue";
import ListeRestaurant from "./ListeRestaurant.vue";
import Recherche from "./Recherche.vue";

export default {
  name: "Accueil",

  components: {

    Menu,
    Recherche,
    ListeRestaurant
  },

  data: () => ({
    //
  }),
};
</script>
