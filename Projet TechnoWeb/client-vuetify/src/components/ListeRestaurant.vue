<template>
  <v-container>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Cuisine</th>
          </tr>
        </thead>
        <tbody>
          <p v-if="restaurants.length == 0">No data aviable</p>
          <tr v-for="r in restaurants" :key="r._id" @click="redirectDetails(r)">
            <td>{{ r.name }}</td>
            <td>{{ r.cuisine }}</td>
            <td>
              <v-btn icon color="red" @click="supprimerRestaurant(r)">
                <v-icon>{{ icons.mdiDelete }}</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
import icons from "../assets/icons";

export default {
  name: "ListeRestaurant",
  data: () => ({
    icons,
    nom: "",
    cuisine: "",
    nbRestaurantsTotal: 0,
    page: 0,
    pageSize: 10,
    nbpagetotal: 0,
    nomRestaurantRechercher: "",
    msg: "",
    restaurants: [],
  }),
  methods: {
    pagePrecedente() {
      if (this.page === 0) return;
      else {
        this.page--;
        this.getRestaurantsFromServer();
      }
    },
    pageSuivant() {
      if (this.page === this.nbpagetotal) return;
      else {
        this.page++;
        this.getRestaurantsFromServer();
      }
    },

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
            console.log(res.count);
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

    supprimerRestaurant(r) {
      let url = "http://localhost:8080/api/restaurants/?" + r._id;
      fetch(url, {
        method: "DELETE",
      })
        .then((responseJSON) => {
          responseJSON.json().then((res) => {
            // Maintenant res est un vrai objet JavaScript
            this.msg = res.msg;
            // on rafraichit la vue
            this.getRestaurantsFromServer();
          });
        })
        .catch(function (err) {
          console.log(err);
        });
    },

    ajouterRestaurant(event) {
      event.preventDefault();

      // Récupération du formulaire. Pas besoin de document.querySelector
      // ou document.getElementById puisque c'est le formulaire qui a généré
      // l'événement
      let form = event.target;

      // Récupération des valeurs des champs du formulaire
      // en prévision d'un envoi multipart en ajax/fetch
      let donneesFormulaire = new FormData(form);

      let url = "http://localhost:8080/api/restaurants";

      fetch(url, {
        method: "POST",
        body: donneesFormulaire,
      })
        .then((responseJSON) => {
          responseJSON.json().then((res) => {
            // Maintenant res est un vrai objet JavaScript
            this.msg = res.msg;
            this.getRestaurantsFromServer();
          });
        })
        .catch(function (err) {
          console.log(err);
        });
      this.nom = "";
      this.cuisine = "";
    },
    getColor(index) {
      return index % 2 ? "white" : "LightGray";
    },
    chercherRestaurant: function () {
      this.getRestaurantsFromServer();
    },

    redirectDetails(r) {
      return this.$router.push({ name: "detailRestaurant", params: { id: r._id, restaurant:r} });
    },
  },

  mounted() {
    // `this` points to the vm instance
    this.getRestaurantsFromServer();
  },

  watch: {
    // watcher sur le nom du restaurant recherché en store
    "$store.state.nomRestaurantRecherche": function () {
      console.log("dans le watch");
      this.getRestaurantsFromServer();
    },
    "$store.state.pageSize": function () {
      console.log("dans le watch");
      this.getRestaurantsFromServer();
    },
  },
};
</script>