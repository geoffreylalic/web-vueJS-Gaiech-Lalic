<template>
  <v-tabs id="menu" fixed-tabs background-color="indigo" dark>
    <v-tab> Accueil </v-tab>
    <v-tab> Localisation </v-tab>
    <v-tab> Admin </v-tab>
  </v-tabs>
</template>

<script>
export default {
  name: "Menu",
  data: () => ({}),
  methods: {},
  mounted() {},
};
</script>

<style>
#menu {
  flex: none;
}
</style>