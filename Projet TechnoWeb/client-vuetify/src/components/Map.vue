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
    </l-marker>
  </l-map>
</template>

<script>
import { LMap, LTileLayer, LMarker, LIcon } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";

export default {
  props: {
    coordinates: [],
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
  },
  data: () => ({
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    center: [1,2],
    zoom: 5,
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
      this.coordinates.forEach((coord, i) => {
        this.markers.push({
          id: i,
          coordinates: [coord[1], coord[0]],
        });
      });
    },
  },

  created() {
    this.createMarkers();
  },

  watch:{
    coordinates(){
      this.markers = [] // remise a zero des coordonnées
      this.createMarkers()
    }
  }
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
</style>