<template>
  <v-container>
    <v-row class="rechercheBar">
      <v-col cols="5">
        <v-text-field
          label="#Restaurant"
          v-model="nomRestaurant"
        ></v-text-field>
      </v-col>
      <v-col cols="5">
        <v-text-field label="#Page Size" v-model="pageSize"></v-text-field>
      </v-col>
      <v-col cols="2">
        <v-btn icon color="green" @click="rechercheRestaurant">
          <v-icon>mdi-cached</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Recherche",
  data: () => ({
    nomRestaurant: "",
    pageSize: "",
  }),
  methods: {
    rechercheRestaurant() {
      this.$store.commit("setNomRestaurantRecherche", this.nomRestaurant);
      this.$store.commit("setPageSize", this.pageSize);
      console.log("dans recherche methods input : "+this.$store.state.nomRestaurantRecherche);
    },
  },
};
</script>

<style>
.rechercheBar {
  align-items: center;
}
</style>
