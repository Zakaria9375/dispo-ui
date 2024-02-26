
<script setup lang="ts">
import GoogleMap from './GoogleMap.vue';
import AppCarousel from './AppCarousel.vue'
import { ref } from 'vue';
const carousel = ref(null)
</script>
<template>
  <div class="flex llg:flex-col llg:items-center gap-x-4">
    <section class="xl:basis-2/5">
      <section class="flex p-2 min-w-[290px]">
        <div class="flex flex-col py-2 pr-8">
          <div class="text-primary font-bold text-[12px]">Active</div>
          <div class="pl-2">
            <div class="font-pop text-[20px] font-semibold">Chauffeur</div>
            <div class="py-2 max-h-[105px] max-w-[105px] rounded-lg">
              <img src="/man.jpg" alt="chauffeur photo" />
            </div>
            <div class="font-semibold text-[15px] mt-4">Adam Lopoto</div>
            <div class="flex items-end space-x-2">
              <span class="material-symbols-outlined text-[#FEC009] zfill">star</span>
              <span class="tracking-tight font-semibold text-[14px]">4.8</span>
            </div>
          </div>
        </div>
        <div class="basis-1/2 py-2 pl-8 flex-col border-l">
          <div class="flex items-center space-x-2 pb-3">
            <img class="w-6 h-5 object-contain" src="/finland.png" alt="finnish" />
            <img class="w-6 h-5 object-contain" src="/france.png" alt="french" />
            <img class="w-6 h-5 object-contain" src="/germany.png" alt="deutsch" />
          </div>
          <div class="text-[#6c6c6c] font-semibold text-[12px]">Name of carrier</div>
          <div class="font-bold pb-3">Bambam SIA</div>
          <div class="text-[#6c6c6c] font-semibold text-[12px]">National reg. nb.</div>
          <div class="font-bold font-pop text-[#14px] pb-3">“Miranda”</div>
          <div class="w-11 h-11 bg-[#5192FA] rounded-xl zflex cursor-pointer">
						<a href="tel:+37128012310" class="zflex">
							<span class="material-symbols-outlined zfill text-white">call</span>
						</a>
          </div>
        </div>
      </section>
      <section class="space-y-3 p-2 pt-6">
        <div class="flex">
          <span class="material-symbols-outlined zfill text-primary mr-4"> check_circle </span>
          <p class="font-nunito font-bold">
            Waiting chauffeur - <span class="text-gtext4">14.06.2022 at 12.32</span>
          </p>
        </div>
        <div class="flex">
          <span class="material-symbols-outlined zfill text-primary mr-4"> check_circle </span>
          <p class="font-nunito font-bold">
            Chauffeur assigned - <span class="text-gtext4">14.06.2022 at 12.32</span>
          </p>
        </div>
        <div class="flex">
          <span class="material-symbols-outlined zfill text-primary mr-4"> check_circle </span>
          <p class="font-nunito font-bold">
            Started - <span class="text-gtext4">14.06.2022 at 12.32</span>
          </p>
        </div>
        <div class="flex">
          <span class="material-symbols-outlined zfill text-gtext2 mr-4"> check_circle </span>
          <p class="font-nunito font-bold text-gtext3">Trip in progress</p>
        </div>
        <div class="flex">
          <span class="material-symbols-outlined zfill text-gtext2 mr-4"> check_circle </span>
          <p class="font-nunito font-bold text-gtext3">Finished</p>
        </div>
      </section>
    </section>
    <section class="xl:basis-3/5 flex-1 llg:max-w-[100%] lg:max-w-[60%] llg:mt-4">
      <div class="zflex pb-8 space-x-2 divide-b-2">
        <button class="bg-third rounded-full py-3 px-6 text-white font-medium hover:bg-thirdLighter lsm:text-sm">Trip details</button>
        <button class="bg-white border border-gray1 border-2 px-6 py-3 rounded-full font-medium hover:bg-[#777] hover:text-white lsm:text-sm">
          Return trip details
        </button>
      </div>
      <div class="px-4 pt-8 border-t">
        <section class="zflex gap-4 max-w-full">
          <div @click="carousel.myCarousel.prev()" class="bg-gray2 rounded-full p-2 zflex  transion-all duration-100 hover:shadow-lg cursor-pointer">
            <span class="material-symbols-outlined zSharpIcon">arrow_left_alt</span>
          </div>
          <!-- <div class="flex flex-1 items-center gap-4 left-shadow py-2 overflow-hidden max-w-full">
            <div class="zmonth bg-primary text-white">6 November</div>
            <div class="zmonth">7 November</div>
            <div class="zmonth">8 November</div>
            <div class="zmonth">9 November</div>
          </div> -->
					<AppCarousel ref="carousel"/>
          <div @click="carousel.myCarousel.next()" class="bg-gray2 rounded-full p-2 zflex transion-all duration-100 hover:shadow-lg cursor-pointer">
            <span class="material-symbols-outlined zSharpIcon">arrow_right_alt</span>
          </div>
        </section>
        <section class="pt-4 grid grid-cols-[24px_1fr] gap-2 justify-center">
          <div class=" flex flex-col justify-between h-[100%]">
            <span class="material-symbols-outlined zSharpIcon relative mt-5 grow line-after"> location_on </span>
            <span class="material-symbols-outlined zSharpIcon relative grow line-after"> location_on </span>
            <span class="material-symbols-outlined zSharpIcon"> location_on </span>
          </div>
          <div class="flex-1">
            <div class="flex flex-wrap mt-5">
              <div class="flex items-center grow">
                <span class="zairport">Riga international airport </span>
                <span class="zairport text-gtext4 ml-1">P133, Marupe, LV-10...</span>
              </div>
              <div class="zflex space-x-1 ml-2">
                <span class="material-symbols-outlined zSharpIcon"> schedule </span>
                <span class="zairport">Depart:</span>
                <span class="zairport">16:45</span>
              </div>
            </div>
            <div class="flex flex-wrap mt-5">
              <div class="flex items-center grow">
                <span class="zairport">Lithuania airport </span>
                <span class="zairport text-gtext4 ml-1">Road name, LT223, Lithuania</span>
              </div>
              <div class="zflex space-x-1 ml-2">
                <span class="material-symbols-outlined zSharpIcon"> schedule </span>
                <span class="zairport">Arrive:</span>
                <span class="zairport">17:20</span>
              </div>
              <div class="zflex space-x-1 ml-2">
                <span class="material-symbols-outlined zSharpIcon"> schedule </span>
                <span class="zairport">Depart:</span>
                <span class="zairport">19:45</span>
              </div>
            </div>
            <div class="flex flex-wrap mt-5">
              <div class="flex items-center grow">
                <span class="zairport">Lithuania airport </span>
                <span class="zairport text-gtext4 ml-1">Road name, LT223, Lithuania</span>
              </div>
              <div class="zflex space-x-1 ml-2">
                <span class="material-symbols-outlined zSharpIcon"> schedule </span>
                <span class="zairport">Arrive:</span>
                <span class="zairport">20:20</span>
              </div>
              <div class="zflex space-x-1 ml-2">
                <span class="material-symbols-outlined zSharpIcon"> schedule </span>
                <span class="zairport">Depart:</span>
                <span class="zairport">21:45</span>
              </div>
            </div>
          </div>
        </section>
        <div class="mt-8 rounded-lg">
          <!-- <img src="/map.jpg" alt="map" /> -->
					<GoogleMap />
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.zfill {
  font-variation-settings:
    'FILL' 1,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24;
}
.zSharpIcon {
  font-variation-settings:
    'FILL' 0,
    'wght' 500,
    'GRAD' 0,
    'opsz' 20;
}
.left-shadow {
  box-shadow: inset -170px 0 20px -173px rgba(0, 0, 0, 0.3);
}
</style>
