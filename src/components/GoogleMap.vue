
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { MarkerClusterer } from "@googlemaps/markerclusterer";


interface Location {
  title: string
  lat: number
  lng: number
}

const locations = ref<Location[]>([
  { title: 'Riga international airport', lat: 56.921721, lng: 23.979967 },
  { title: 'Lithuania airport', lat: 54.635432, lng: 25.285365 },
  { title: 'Lithuania airport2', lat: 54.687814, lng: 25.278893 }
])
let map: google.maps.Map;
let infoWindow: google.maps.InfoWindow;

async function initMap() {
	
  const { Map, InfoWindow } = await google.maps.importLibrary('maps') as google.maps.MapsLibrary;
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary('marker') as google.maps.MarkerLibrary;

  map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
    center: { lat: 56.236746, lng: 24.576077 },
    zoom: 5,
		mapId: 'Hyl4lesWicvCQ7Nhhm6No'
  })

  infoWindow = new google.maps.InfoWindow({
    content: '',
    disableAutoPan: true
  })
  const labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const markers = locations.value.map((position, i) => {
    const label = labels[i % labels.length]
    const pinGlyph = new google.maps.marker.PinElement({
      glyph: label,
      glyphColor: 'white'
    })
    const marker = new google.maps.marker.AdvancedMarkerElement({
      position,
      content: pinGlyph.element
    })

    marker.addListener('click', () => {
      infoWindow.setContent(position.title)
      infoWindow.open(map, marker)
    })
    return marker
  })
  new MarkerClusterer({ markers, map })
}

onMounted(() => {
  initMap()
})
</script>

<template>
  <div class="rounded-lg overflow-hidden shadow-md">
    <div id="map" class="min-h-[225px]"></div>
  </div>
</template>
