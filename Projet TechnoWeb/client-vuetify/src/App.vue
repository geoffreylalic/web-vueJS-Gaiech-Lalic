<template>
  <v-app>
    <Menu />
    <Header />
    <ListeRestaurant />
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Menu from "./components/Menu.vue";
import ListeRestaurant from "./components/ListeRestaurant.vue";

export default {
  name: "App",

  components: {
    Header,
    Menu,
    ListeRestaurant
  },

  data: () => ({
    //
  }),
};
</script>
