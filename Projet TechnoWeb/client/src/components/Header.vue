<template>
  <div>
    <h2>{{ msg }}</h2>
    <form @submit.prevent="ajouterRestaurant($event)">
      <label>
        Nom : <input name="nom" type="text" required v-model="nom" />
      </label>
      <label>
        Cuisine :
        <input name="cuisine" type="text" required v-model="cuisine" />
      </label>

      <button>Ajouter</button>
    </form>

    <h1>Nombre de restaurants : {{ nbRestaurantsTotal }}</h1>
    <p>
      chercher par nom :
      <input
        @change="chercherRestaurant()"
        type="text"
        v-model="nomRestaurantRechercher"
      />
    </p>
    <p>nb de page total: {{ nbpagetotal }}</p>
    <button :disabled="page === 0" @click="pagePrecedente()">Précédent</button>
    <button :disabled="page === nbpagetotal" @click="pageSuivant()">
      Suivant
    </button>
    Page courante: {{ page }}
    <p>
      nombre de restaurants par page
      <input
        @input="getRestaurantsFromServer()"
        type="range"
        min="2"
        max="100"
        value="10"
        v-model="pageSize"
      />
      {{ pageSize }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: () => ({}),
  methods: {},
  mounted() {},
};
</script>
