<script setup lang="ts">
import { ref } from 'vue'
import { vOnClickOutside } from '@vueuse/components'
const Languages = [
  { flag: 'united-kingdom.png', title: 'English' },
  { flag: 'france.png', title: 'French' },
  { flag: 'spain.png', title: 'Spanish' },
  { flag: 'russia.png', title: 'Russian' },
  { flag: 'germany.png', title: 'Deutsch' }
]
const selectedLanguage = ref('English')

const isOpen = ref(false)
function closeMenu() {
  isOpen.value = false
}
function openMenu() {
  isOpen.value = true
}
function changeLanguage (currency: string) {
	selectedLanguage.value = currency
}
</script>
<template>
  <div class="relative" v-on-click-outside="closeMenu" title="Choose language">
    <div @click="openMenu" class="flex items-end cursor-pointer">
      <span class="mr-3 maxlg2R:hidden">{{ selectedLanguage }}</span>
      <span class="material-symbols-outlined"> language </span>
    </div>
    <div v-if="isOpen" class="bg-white rounded-lg shadow-md py-5 px-6 absolute space-y-4 z-50 min-w-40">
      <div @click="changeLanguage(language.title)"  v-for="language in Languages" :key="language.title" class="flex items-center justify-between cursor-pointer">
        <img class="size-6" :src="`/images/${language.flag}`" :alt="language.title">
        <span class="text-base font-bold font-nunito">{{ language.title }}</span>
      </div>
    </div>
  </div>
</template>
