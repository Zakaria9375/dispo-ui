<script setup lang="ts">
import MainContent from './MainContent.vue'
import MainHeading from './MainHeading.vue'
</script>

<template>
  <div class="md:py-6 container mb-[86px]  max-w-[1440px] md:mx-4">
    <div class="md:rounded-[35px] z-10 bg-white relative top-[102px] w-full md:pb-[67px]">
      <div class="mx-auto relative w-full md:max-w-[92%] top-[-90px] z-20 ">
        <MainHeading />
      </div>
      <div
        class="md:shadow-md mx-auto bg-white md:rounded-[14px] z-30 relative mt-[-157px] w-full md:max-w-[76%] p-11 lmd:pb-14"
      >
        <MainContent />
      </div>
    </div>
  </div>
</template>
<style>
.mh {
  height: calc(100% - 90px);
}
</style>
