<template>
  <div>
    <h2>{{ msg }}</h2>
    <form @submit.prevent="ajouterRestaurant($event)" >
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
        @input="chercherRestaurant()"
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
    <md-table>
      <md-table-row>
        <md-table-head>Nom</md-table-head>
        <md-table-head>Cuisine</md-table-head>
      </md-table-row>
      <tbody>
        <tr
          v-for="(r, index) in restaurants"
          :key="r"
          @click="supprimerRestaurant(r)"
          v-bind:style="{ backgroundColor: getColor(index) }"
          v-bind:class="{ bordureRouge: index === 2 }"
        >
          <td>{{ r.name }}</td>
          <td>{{ r.cuisine }}</td>
        </tr>
      </tbody>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({
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
                url += "&pagesize=" + this.pageSize
                url += "&name=" + this.nomRestaurantRechercher
                fetch(url, {
                    method: 'get'
                }).then( (res) => {// arrow functions, conserve le bon "this"
                    res.json().then((res) => {
                        console.log(res.count)
                        this.restaurants = res.data;
                        this.nbRestaurantsTotal = res.count;
                        this.nbpagetotal = Math.round(this.nbRestaurantsTotal / this.pageSize);
                    })

                }).catch( (err)=> {
                    console.log(err)
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
                    body: donneesFormulaire
                })
                    .then((responseJSON) => {
                        responseJSON.json()
                            .then((res) => {
                                // Maintenant res est un vrai objet JavaScript
                                this.msg = res.msg;
                            });
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
                this.nom = "";
                this.cuisine = "";
            },
            getColor(index) {
                return (index % 2) ? 'lightBlue' : 'pink';
            }
      },
         mounted : function () {
            // `this` points to the vm instance
            console.log("AVANT RENDU HTML")
            this.getRestaurantsFromServer();
        }
        
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  border: 1px solid black;
  width: 100%;
  border-collapse: collapse;
}

tr,
td {
  border: 1px solid black;
}

td {
  padding: 5px;
}

tr:hover {
  background-color: yellow;
}

input:invalid {
  background-color: pink;
}

input:valid {
  background-color: lightGreen;
}

.bordureRouge {
  border: 2px dashed red;
}
</style>
