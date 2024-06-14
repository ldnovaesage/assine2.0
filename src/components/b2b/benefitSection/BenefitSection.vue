<template>
  <div
    class="flex flex-col justify-center items-center text-center py-12 space-y-12"
  >
    <div>
      <h1 class="text-7xl font-semibold text-age-business-blue-400">
        Benefícios
      </h1>
    </div>
    <div>
      <span class="text-3xl text-gray-600">
        A <b>Age Empresas</b> oferece o desempenho
        <b>ideal para a<br />gestão do seu negócio</b>, além do atendimento
        exclusivo<br />
        e personalizado, confira:
      </span>
    </div>
    <div
      v-if="selectedValue === 'banda'"
      class="grid grid-cols-1 min-[1000px]:grid-cols-3 min-[1600px]:grid-cols-4 gap-4 w-full p-8 px-60 justify-center items-center"
    >
      <div
        v-for="benefit in benefitsBand"
        :key="benefit.id"
        class="benefit-card"
      >
        <img :src="getImage(benefit.figure)" alt="" class="h-20 w-20" />
        <div class="px-4">
          <span class="text-lg text-white mt-2"
            ><b>{{ benefit.title }}</b> {{ benefit.description }}</span
          >
        </div>
      </div>
    </div>

    <div
      v-if="selectedValue === 'link'"
      class="grid grid-cols-1 min-[1000px]:grid-cols-3 min-[1600px]:grid-cols-4 gap-4 w-full p-8 px-60 justify-center items-center"
    >
      <div
        v-for="benefit in benefitsLink"
        :key="benefit.id"
        class="benefit-card"
      >
        <img :src="getImage(benefit.figure)" alt="" class="h-20 w-20" />
        <div class="px-4">
          <span class="text-lg text-white mt-2"
            ><b>{{ benefit.title }}</b> {{ benefit.description }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

import { useMainStore } from "@/store/useMainStore";

const store = useMainStore();
const selectedValue = computed(() => store.selectedValue);

const getImage = (figure) => require(`@/assets/b2b/benefits/${figure}.png`);

const benefitsBand = ref([
  {
    id: 1,
    title: "Fibra Ótica",
    description: "de ponta a ponta",
    figure: "fiber",
  },
  {
    id: 2,
    title: "Banda Larga",
    description: "VoIP e IP Fixo",
    figure: "band",
  },
  { id: 3, title: "Franquia", description: "Ilimitada", figure: "ilimited" },
  {
    id: 4,
    title: "Alta disponibilidade",
    description: "de rede",
    figure: "disponibility",
  },
  {
    id: 5,
    title: "NOC 24/7 e",
    description: "Rede Local (L2L)",
    figure: "noc",
  },
  {
    id: 6,
    title: "SLA de instalação",
    description: "em até 48 horas",
    figure: "installation",
  },
  {
    id: 7,
    title: "MTTR",
    description: "(tempo de reparo): até 48 horas",
    figure: "mttr",
  },
  {
    id: 8,
    title: "Segurança",
    description: "de alto grau de proteção",
    figure: "security",
  },
  {
    id: 9,
    title: "Data center",
    description: "de última geração (Tier3)",
    figure: "datacenter",
  },
  {
    id: 10,
    title: "60% de",
    description: "upload",
    figure: "upload",
  },
  {
    id: 11,
    title: "Instalação",
    description: "gratuita",
    figure: "free",
  },
]);

const benefitsLink = ref([
  {
    id: 1,
    title: "Fibra Ótica",
    description: "de ponta a ponta",
    figure: "fiber",
  },
  {
    id: 4,
    title: "Alta disponibilidade",
    description: "de rede",
    figure: "disponibility",
  },
  {
    id: 5,
    title: "NOC 24/7 e",
    description: "Rede Local (L2L)",
    figure: "noc",
  },
  {
    id: 6,
    title: "SLA de instalação",
    description: "em até 48 horas",
    figure: "installation",
  },
  {
    id: 7,
    title: "MTTR",
    description: "(tempo de reparo): até 48 horas",
    figure: "mttr",
  },
  {
    id: 8,
    title: "Segurança",
    description: "de alto grau de proteção",
    figure: "security",
  },
  {
    id: 9,
    title: "Data center",
    description: "de última geração (Tier3)",
    figure: "datacenter",
  },
]);
</script>

<style lang="scss" scoped>
  .benefit-card {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #1d4ed8;
    padding: 12px 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 24px;
    height: 110px;
    text-align: left;
  }
</style>
