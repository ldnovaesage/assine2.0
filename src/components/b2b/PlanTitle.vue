<template>
  <div class="relative w-screen bg-gray-100 py-4">
    <div class="w-full flex justify-center items-center">
      <div
        class="flex flex-col justify-center items-center space-y-2 p-8 w-10/12 -mt-12 rounded-3xl bg-white font-poppins"
      >
        <div
          v-if="selectedValue === 'link'"
          class="flex flex-col justify-center items-center"
        >
          <span class="text-7xl font-extrabold text-age-business-blue-400">
            Link Dedicado
          </span>
          <span class="text-age-business-blue-400"> Planos </span>
        </div>
        <div
          v-if="selectedValue === 'banda'"
          class="flex flex-col justify-center items-center"
        >
          <span class="text-7xl font-extrabold text-age-business-orange-400">
            Banda Larga
          </span>
          <span class="text-age-business-orange-400"> Combos </span>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useMainStore } from "@/store/useMainStore";

const store = useMainStore();

const selectedValue = computed(() => store.selectedValue);
</script>

<style lang="scss" scoped></style>
