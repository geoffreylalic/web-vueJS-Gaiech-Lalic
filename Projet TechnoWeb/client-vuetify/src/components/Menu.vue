<template>
  <v-tabs id="menu" fixed-tabs background-color="indigo" dark>
    <v-tab @click="redirectAccueil()" > Accueil </v-tab>
    <v-tab @click="redirectLocalisation()"> Localisation </v-tab>
    <v-tab> Admin </v-tab>
  </v-tabs>
</template>

<script>
export default {
  name: "Menu",
  data: () => ({}),
  methods: {
    redirectLocalisation() {
      
       if (this.$store.state.pageActive!="localisation"){
      this.$store.commit("SetpageActive", "localisation");
      return this.$router.push({ name: "localisation" , params: {}});
       }
      
    },

    redirectAccueil() {

       if (this.$store.state.pageActive!="accueil"){
      this.$store.commit("SetpageActive", "accueil");
      return this.$router.push({ name: "accueil", params: {} });
       }
      
    },
  },
  

  mounted() {
   
    console.log(this.$router)
  },
};
</script>

<style>
#menu {
  flex: none;
}
</style>