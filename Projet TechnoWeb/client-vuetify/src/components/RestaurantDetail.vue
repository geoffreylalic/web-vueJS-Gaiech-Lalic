<template>
  <div>
    <Menu />
    <v-container>
      <v-card elevation="5" class="textalign-center">
        <v-row>
          <div class="text-h1">{{ restaurant.name }}</div>
          <div>
            <v-icon>{{ icons.mdiSilverwareForkKnife }}</v-icon>
            {{ restaurant.cuisine }}
          </div>
          <div>
            <v-icon>{{ icons.mdiStoreMarker }}</v-icon>
            {{ restaurant.address.building }} {{ restaurant.address.street }}
            {{ restaurant.address.zipcode }}, {{ restaurant.borough }}
          </div>
        </v-row>
      </v-card>
    </v-container>
    <br />
    <br />
    <br />
    <br />

    <v-container>
      <v-card>
        <v-row v-for="(grade, i) in restaurant.grades" :key="i">{{
          grade
        }}
        <span v-for="(star,i) in averageScore" :key="i">
          <v-icon>{{icon.mdiStar}}</v-icon>
        </span>
        </v-row>
      </v-card>
    </v-container>
    <br />
    <br />
    <br />
    <br />
    <br />
    <v-container>
      <Map
        :latitude="restaurant.address.coord[0]"
        :longitude="restaurant.address.coord[1]"
      />
    </v-container>
  </div>
</template>

<script>
import icons from "../assets/icons";
import Menu from "./Menu.vue";
import Map from "./Map.vue";

export default {
  name: "RestaurantDetail",

  data() {
    return {
      icons,
    };
  },

  components: {
    Menu,
    Map,
  },

  props: {
    id: String,
    restaurant: null,
  },

  methods: {},

  computed: {
    averageScore: function () {
      let grades = this.restaurant.grades;
      let score = 0;
      grades.forEach((g) => {
        score += g.score;
      });
      let scoreAv = score / grades.length;
      return Math.round(scoreAv / 4);
    },
  },

  mounted() {
    console.log(this.restaurant);
  },
  created() {},
};
</script>
