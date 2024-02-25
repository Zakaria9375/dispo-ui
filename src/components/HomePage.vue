<script setup lang="ts">
import MainContent from './MainContent.vue'
import MainHeading from './MainHeading.vue'
</script>

<template>
  <div class="py-8 container mb-[86px]  max-w-[1440px] mx-4">
    <div class="rounded-[35px] z-10 bg-white relative top-[102px] w-full pb-[67px]">
      <div class="mx-auto relative w-full max-w-[92%] top-[-90px] z-20 ">
        <MainHeading />
      </div>
      <div
        class="shadow-md mx-auto bg-white rounded-[14px] z-30 relative mt-[-157px] w-full max-w-[76%] p-11"
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
