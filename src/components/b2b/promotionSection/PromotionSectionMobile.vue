<template>
  <div class="flex flex-col justify-center items-center mb-12 mt-20">
    <div>
      <h1 class="text-3xl font-medium text-gray-700">Planos corporativos</h1>
      <h2 class="text-3xl text-age-business-blue-400 font-bold">
        promocionais:
      </h2>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 w-full p-4 justify-center items-center"
    >
      <div
        v-for="plan in linkPlans"
        :key="plan.id"
        class="flex flex-row bg-gradient-to-r from-age-business-blue-400 to-age-business-blue-100 items-center shadow-lg px-8 rounded-3xl"
      >
        <div class="w-1/2 -mt-8 flex flex-col items-center justify-center mr-2">
          <h1
            class="flex flex-col items-center justify-center text-7xl mt-5 font-black relative text-white"
          >
            <span class="relative z-10 flex items-center">
              {{ plan.size }}
              <img
                src="@/assets/b2b/mb.png"
                alt=""
                class="h-5 absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2"
              />
            </span>
          </h1>
          <div class="mb-2 py-1 rounded-3xl bg-white w-10/12">
            <span class="font-semibold text-xs">Cupom: {{ plan.cupom }}</span>
          </div>
        </div>
        <div class="w-1/2 flex flex-col justify-center items-center ml-4 py-6 border-l">
          <div
            class="flex flex-row items-center justify-center relative pb-4 pl-2 text-white"
          >
            <span class="text-base font-bold mt-1 self-start">R$</span>
            <span class="text-4xl font-black">{{ plan.value }}</span>
            <div class="flex flex-col">
              <span class="font-bold text-xl">{{ plan.cents }}</span>
              <span class="font-medium text-xs">/mês</span>
            </div>
          </div>
          <div
            class="bg-gradient-to-r from-age-business-orange-400 cursor-pointer to-age-business-orange-100 w-10/12 p-1 rounded-3xl"
          >
            <span class="text-white font-semibold" style="font-size: 0.7em"
              >Entre em contato</span
            >
          </div>
        </div>
      </div>
    </div>
    <div
      class="bg-gradient-to-r from-age-business-blue-400 to-age-business-blue-100 w-10/12 mt-4 p-2 cursor-pointer rounded-lg"
    >
      <a href="https://wa.me/556140404040" target="_blank" class="text-white font-poppins text-base font-bold">GARANTA JÁ</a>
    </div>
    <div class="mt-4">
      <span class="font-poppins text-base text-gray-400"
        >*Planos promocionais para
        <b class="font-medium text-age-business-orange-200">36 meses</b></span
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const linkPlans = ref([
  {
    id: 1,
    size: "50",
    value: "499",
    cents: ",00",
    mb: true,
    cupom: "Agelink20",
  },
  {
    id: 2,
    size: "100",
    value: "799",
    cents: ",00",
    mb: true,
    cupom: "Agelink20",
  },
  {
    id: 1,
    size: "200",
    value: "949",
    cents: ",00",
    mb: true,
    cupom: "Agelink20",
  },
  {
    id: 1,
    size: "300",
    value: "1.399",
    cents: ",00",
    mb: true,
    cupom: "Agelink20",
  },
]);
</script>

<style lang="scss" scoped></style>
