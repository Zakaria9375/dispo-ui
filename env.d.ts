/// <reference types="vite/client" />
declare global {
  interface Window {
    isGoogleMapsLoaded: boolean
    initMap: () => void
  }
}
export {}
