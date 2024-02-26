<script setup lang="ts">
import { ref } from 'vue'
import { vOnClickOutside } from '@vueuse/components'
const currencies = [
  { symbol: '€', title: 'EUR' },
  { symbol: '$', title: 'USD' },
  { symbol: '£', title: 'GBP' },
  { symbol: ' ¥', title: 'JPY' },
  { symbol: '₽', title: 'RUB' }
]
const selectedCurrency = ref('EUR')
const isOpen = ref(false)
function closeMenu() {
  isOpen.value = false
}
function openMenu() {
  isOpen.value = true
}
function changeCurrency (currency: string) {
	selectedCurrency.value = currency
}
</script>
<template>
  <div class="relative" v-on-click-outside="closeMenu" title="Change currency">
    <div @click="openMenu" class="flex items-end mr-6 cursor-pointer">
      <span class="mr-3 maxlg2R:hidden">{{ selectedCurrency }}</span>
      <span class="material-symbols-outlined"> currency_exchange </span>
    </div>
    <div v-if="isOpen" class="bg-white rounded-lg shadow-md py-5 px-6 absolute space-y-4 z-50 min-w-40 right-0">
      <div @click="changeCurrency(currency.title)" v-for="currency in currencies" :key="currency.symbol" class="flex items-center justify-between cursor-pointer">
        <span class="text-base font-bold font-nunito">{{ currency.symbol }}</span>
        <span class="text-base font-bold font-nunito">{{ currency.title }}</span>
      </div>
    </div>
  </div>
</template>
