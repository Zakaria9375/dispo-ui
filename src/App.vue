<script setup lang="ts">
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
import HomePage from './components/HomePage.vue';
</script>

<template>
  <div class="font-sans bg-bGround">
    <AppHeader />
    <div class="zflex">
			<HomePage/>
    </div>
    <AppFooter />
  </div>
</template>

<style></style>
