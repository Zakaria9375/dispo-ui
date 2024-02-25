<script setup lang="ts">
import { ref } from 'vue'
const isCopied = ref(false)
const linkToCopy = ref('https://vuejs.org/')
const copyLink = () => {
  if (linkToCopy.value) {
    try {
      navigator.clipboard.writeText(linkToCopy.value)
			isCopied.value = true
    } catch (error) {
      console.log('☢️Failed to copy the link: ',error)
    }
  }
}
</script>

<template>
  <div
    class="pt-[40px] pb-24 bg-gradient-to-br from-[#201E50] to-[#181B2E] md:rounded-[35px] zflex flex-col relative overflow-hidden"
  >
    <h2 class="font-pop font-bold text-gtext traching-tight text-2xl pb-2">
      Your daily rental details
    </h2>
    <div class="lmd:my-4 zflex text-gtext space-x-6 text-[15px] flex-wrap px-4 gap-y-4">
      <div class="zflex space-x-2">
        <span class="material-symbols-outlined"> verified_user </span>
        <span>Request #779</span>
      </div>
      <div class="zflex space-x-2">
        <span class="material-symbols-outlined"> calendar_today </span>
        <span>Trip starts: 18 feb - 11:00</span>
      </div>
      <div class="zflex space-x-2">
        <span class="material-symbols-outlined"> person </span>
        <span>45 people</span>
      </div>
      <div class="zflex space-x-2 border border-gtext rounded-full px-4 py-2">
        <span>Paid 12€</span>
        <span class="material-symbols-outlined true"> done </span>
      </div>
      <div class="zflex space-x-2 underline hover:text-base hover:cursor-pointer hover:text-white">
        <span>view invoice</span>
      </div>
    </div>
    <div
      @click="copyLink"
      class="zflex pt-2 space-x-2 font-pop font-normal text-sm text-[#A9AABC] cursor-pointer hover:text-white"
    >
      <span class="material-symbols-outlined"> content_copy </span>
      <span v-if="!isCopied">Copy your unique trip link</span>
			<span v-else class="zflex">Copied <span class="material-symbols-outlined true text-green-600"> done </span></span>
    </div>
    <div
      class="absolute w-[450px] h-[450px] rounded-full border-2 border-white right-0 bottom-0 translate-x-[55%] translate-y-[55%] maxlg2R:hidden"
    >
      <div
        class="w-[40px] h-[40px] relative left-[60px] top-[30px] rounded-full border-2 border-white"
      ></div>
    </div>
  </div>
</template>
<style>
.true {
  font-variation-settings:
    'FILL' 1,
    'wght' 800,
    'GRAD' 0,
    'opsz' 22;
}
</style>
