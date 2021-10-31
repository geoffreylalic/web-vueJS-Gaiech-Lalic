<template>
  <v-app>
    <Menu />
    <Recherche />
    <Map />
  </v-app>
</template>

<script>
import Menu from "./Menu.vue";
import Recherche from "./Recherche.vue";
import Map from "./Map.vue";

export default {
  name: "Localisation",

  components: {
    Menu,
    Recherche,
    Map,
  },

  data: () => ({}),

  methods:{
          getRestaurantsFromServer() {
      // url (required), options (optional)
      let url = "http://localhost:8080/api/restaurants?";
      url += "page=" + this.page;
      url += "&pagesize=" + this.$store.state.pageSize;
      url += "&name=" + this.$store.state.nomRestaurantRecherche;
      fetch(url, {
        method: "get",
      })
        .then((res) => {
          // arrow functions, conserve le bon "this"
          res.json().then((res) => {
            this.restaurants = res.data;
            this.nbRestaurantsTotal = res.count;
            this.nbpagetotal = Math.round(
              this.nbRestaurantsTotal / this.pageSize
            );
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  watch: {
    // watcher sur le nom du restaurant recherché en store
    "$store.state.nomRestaurantRecherche": function () {
      this.getRestaurantsFromServer();
    },
    "$store.state.pageSize": function () {
      this.getRestaurantsFromServer();
    },
  },
};
</script>
