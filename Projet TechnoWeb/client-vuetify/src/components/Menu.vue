<template>
  <!-- un autre menu
    <div class="centrer">
<div class="topnav">
  <a id="blanc" @click="redirectAccueil()">Accueil</a>
  <a id="blanc" @click="redirectLocalisation()">Localisation</a>
  <a id="blanc" >Admin</a>
</div>
</div>
 
  <v-tabs id="menu" fixed-tabs background-color="indigo" dark>
    <v-tab @click="redirectAccueil()" > Accueil </v-tab>
    <v-tab @click="redirectLocalisation()"> Localisation </v-tab>
    <v-tab> Admin </v-tab>
  </v-tabs> -->

 <v-card>
    <v-toolbar
      color="cyan"
      dark
      flat
    >
      <v-app-bar-nav-icon style="background-color:#00bcd4"></v-app-bar-nav-icon>

      <v-toolbar-title>Liste des meilleur restaurants</v-toolbar-title>

    

      <template v-slot:extension>
     
    
 <v-tab @click="redirectAccueil()" > Accueil </v-tab>
    <v-tab @click="redirectLocalisation()"> Localisation </v-tab>
   
      </template>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: "Menu",
  data: () => ({
    drawer: false,
    group: null,
  }),
  methods: {
    redirectLocalisation() {
      if (this.$store.state.pageActive != "localisation") {
        this.$store.commit("SetpageActive", "localisation");
        return this.$router.push({ name: "localisation", params: {} });
      }
    },

    redirectAccueil() {
      if (this.$store.state.pageActive != "accueil") {
        this.$store.commit("SetpageActive", "accueil");
        return this.$router.push({ name: "accueil", params: {} });
      }
    },
  },

  mounted() {
    console.log(this.$router);
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style>

#stop {
  min-height:none ;
  min-width: none;
}
#menu {
  flex: none;
}

/* Add a black background color to the top navigation */
.topnav {
  margin-left: 30%;
  margin-right: auto;
}
.centrer {
  background-color: #04aa6d;
}
/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 50px;
  text-decoration: none;
  font-size: 17px;
  margin-left: auto;
  margin-right: auto;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: rgba(221, 221, 221, 0.521);
  color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
  background-color: #04aa6d;
  color: white;
}
#blanc {
  color: #f5f5f5;
}
</style>