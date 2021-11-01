<template>
  <l-map
    id="map"
    :center="center"
    :zoom="zoom"
    class="map"
    ref="map"
    @update:zoom="zoomUpdated"
    @update:center="centerUpdated"
  >
    <l-tile-layer :url="url"> </l-tile-layer>
    <l-marker v-for="m in markers" :key="m.id" :lat-lng="m.coordinates">
      <l-icon :icon-anchor="staticAnchor">
        <img src="../assets/marker.png" />
      </l-icon>
      <l-popup>
        <a id="popup" @click=" redirectDetails(m)">{{ m.name }}!</a>
      </l-popup>
    </l-marker>
  </l-map>
</template>

<script>
import { LMap, LTileLayer, LMarker, LIcon, LPopup } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";

export default {
  props: {
    coordinates: [], // en reprend toute les coordonné utile du restaurant
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    LPopup,
  },
  data: () => ({
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    center: [1, 2],
    zoom: 2,
    staticAnchor: [16, 37],
    markers: [],
  }),
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
    createMarkers() {
      // c'est ici quand prend tout les données du marker
      this.coordinates.forEach((coord) => {
        console.log(coord);
        this.markers.push({
          _id: coord._id,
          address : coord.address,
          coordinates: [coord.address.coord[1], coord.address.coord[0]],
          name: coord.name,
          borough:coord.borough,
          cuisine:coord.cuisine,
          grades:coord.grades,
          restaurant_id: coord.restaurant_id,
        });
      });
      
    },
     redirectDetails(r) {
       this.$store.commit("SetpageActive", "detailrestaurant");
      return this.$router.push({
        name: "detailRestaurant",
        params: { id: r._id, restaurant: r },
      });
    },

    
  },

  created() {
    this.createMarkers();
  },

  watch: {
    coordinates() {
      this.markers = []; // remise a zero des coordonnées
      this.createMarkers();
    },
  },
};
</script>

<style>
#map {
  position: absolute;
  width: 40%;
  height: 40%;
  overflow: hidden;
}
img {
  width: 30px;
  height: 30px;
}
.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {
  margin-bottom: 47px;
}
#popup {
  color: #1e1e1e;
}
</style>