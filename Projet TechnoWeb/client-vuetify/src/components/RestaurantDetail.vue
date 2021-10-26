<template>
  <div>
    <Menu />
    {{restaurant.name}}
    <Map/>
  </div>
</template>

<script>
import Menu from './Menu.vue'
import Map from './Map.vue'
export default {
  name: "RestaurantDetail",

  components:{
    Menu,
    Map,
  },

  data: () => ({
    restaurant: null,
  }),

  props: {
    id: String,
  },

  methods: {
    init() {
      this.getRestaurantFromid();
    },

    getRestaurantFromid() {
      let url = "http://localhost:8080/api/restaurants/" + this.id;
      fetch(url)
        .then((res) =>
          res.json().then((res) => {
            this.restaurant = res.restaurant
            console.log(this.restaurant)
          })
        )
        .catch((err) => {
          console.log(err);
        });
    },
  },

  mounted() {
    
  },

  computed: {},

  created() {
    this.init();
  },
};
</script>
