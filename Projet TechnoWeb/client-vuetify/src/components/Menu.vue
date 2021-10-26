<template>
  <v-tabs id="menu" fixed-tabs background-color="indigo" dark>
    <v-tab @click="redirectAccueil()"> Accueil </v-tab>
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
      return this.$router.push({ name: "localisation" });
    },

    redirectAccueil() {
      return this.$router.push({ name: "accueil" });
    },
  },

  mounted() {},
};
</script>

<style>
#menu {
  flex: none;
}
</style>