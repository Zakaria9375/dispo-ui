<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import { useElementSize } from '@vueuse/core'
import { ref, computed } from 'vue'

const days = [6, 7, 8, 9, 10, 11]
const myCarousel = ref(null)
const { width } = useElementSize(myCarousel)
const nItems = computed(() => width.value / 120)
defineExpose({myCarousel})

const activeIndex = ref(0)
const setActive = (i: number) => {
	activeIndex.value = i
}
</script>
<template>
  <carousel
    ref="myCarousel"
    :items-to-show="nItems"
    :transition="300"
		snap-align="start"
    class="flex flex-1 items-center gap-4 left-shadow py-2 overflow-hidden max-w-full"
  >
    <slide v-for="(day, index) in days" :key="day" class="">
      <div @click="setActive(index)" class="zmonth" :class="{active: activeIndex === index}">{{ day }} November</div>
    </slide>
  </carousel>
</template>
<style></style>
