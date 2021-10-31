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
  props:{
    latitude:Number,
    longitude:Number
  },
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
    ],
  }),
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
      console.log(this.markers);
      console.log(this.latitude, this.longitude)
    },
    centerUpdated(center) {
      this.center = center;
    },
    createMarkers(long, lat){
      this.markers.push({
        id: this.markers.length, coordinates: [long, lat]
      })
    }
  },

  mounted(){
    this.createMarkers(this.longitude,this.latitude)
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
</style>