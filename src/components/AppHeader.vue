<script setup lang="ts">
import { ref } from 'vue'
import { useWindowSize } from '@vueuse/core'
import CurrencyExchange from './CurrencyExchange.vue'
import LanguageChange from './LanguageChange.vue'
import { vOnClickOutside } from '@vueuse/components'

const isOpen = ref(false)
const { width } = useWindowSize()
const toggleOpen = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <header class="md:h-[100px] lmd:h-20 zflex maxlg2R:mx-8 minlg2R:mx-12">
    <div class="container flex justify-between items-center max-w-[1300px]">
      <section class="flex items-center text-[13px] font-bold text-[#5c5b6d]">
        <div class="logo mr-10"><a href="/" class="cursor-pointer">Dispo</a></div>
        <CurrencyExchange />
        <LanguageChange />
      </section>
      <section class="relative">
        <div
          v-if="isOpen || width >= 1024"
          class="font-bold lg:space-x-5 zflex llg:absolute llg:flex-col llg:bg-bGround llg:top-[48px] llg:right-0 z-50 llg:overflow-hidden llg:shadow-md llg:p-8 llg:space-y-4 llg:rounded-lg llg:min-w-64"
        >
          <a to="/" class="text-primary cursor-pointer">Transport</a>
          <a to="/" class="cursor-pointer hover:text-primary">Tours</a>
          <a to="/" class="cursor-pointer hover:text-primary">Partners</a>
          <a to="/" class="cursor-pointer hover:text-primary">About B2B</a>
          <a to="/" class="cursor-pointer hover:text-primary">Contact</a>
          <div
            class="bg-secondary w-36 h-10 zflex rounded-full cursor-pointer hover:bg-secondaryLighter"
          >
            <a to="/" class="text-white font-bold text-base">Book Today</a>
          </div>
          <a to="/" class="cursor-pointer hover:text-primary">Log in / Sign up</a>
        </div>
        <div @click="toggleOpen"  v-on-click-outside="toggleOpen" class="lg:hidden cursor-pointer zflex w-12 h-12 border rounded-lg">
          <span v-show="!isOpen" class="material-symbols-outlined sharp"> menu </span>
          <span v-show="isOpen" class="material-symbols-outlined sharp"> close </span>
        </div>
      </section>
    </div>
  </header>
</template>
<style>
.sharp {
  font-variation-settings:
    'FILL' 0,
    'wght' 500,
    'GRAD' 0,
    'opsz' 24;
}
</style>
