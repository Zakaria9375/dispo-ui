import { onMounted, ref } from 'vue'

export function useGoogleMapsApi() {
  const isLoaded = ref(false)

  function onMapsApiLoaded() {
    isLoaded.value = true
  }

  onMounted(() => {
    if (window.isGoogleMapsLoaded) {
      isLoaded.value = true
    } else {
      window.addEventListener('google-maps-loaded', onMapsApiLoaded)
    }
  })

  return { isLoaded }
}
