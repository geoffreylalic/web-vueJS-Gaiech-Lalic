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
    </l-marker>
  </l-map>
</template>

<script>
import { LMap, LTileLayer,LMarker } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data: () => ({
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    center: [49.1193089, 6.1757156],
    zoom: 6,
    markers: [
      { id: 1, coordinates: [49.11491, 6.17881] },
      { id: 2, coordinates: [49.13329, 6.15437] },
      { id: 3, coordinates: [49.10216, 6.15885] },
      { id: 4, coordinates: [49.13601, 6.19963] },
      { id: 5, coordinates: [49.105563, 6.182234] },
    ],
  }),
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
      console.log(this.markers);
    },
    centerUpdated(center) {
      this.center = center;
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
</style>