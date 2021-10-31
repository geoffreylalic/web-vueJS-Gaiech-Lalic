<template>
  <l-map
    id="map"
    :center="markers[0].coordinates"
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
import { LMap, LTileLayer,LMarker,LIcon } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";

export default {
  props:{
    latitude:Number,
    longitude:Number
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,LIcon
  },
  data: () => ({
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    center: [],
    zoom: 6,
     staticAnchor: [16, 37],
    markers: [
    ],
  }),
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
      
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
img {
  width: 30px;
  height: 30px;
}
</style>