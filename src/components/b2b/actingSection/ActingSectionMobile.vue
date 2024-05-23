<template>
    <div class="bg-gray-100 pb-32">
      <div>
        <span
          class="text-xl font-bold text-age-business-orange-200"
          style="letter-spacing: 0.5em"
          >AGE EMPRESAS</span
        >
      </div>
      <div class="mt-8 mb-12">
        <span class="text-4xl">Área de atuação</span>
      </div>
      <div>
        <div
          class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 w-full p-8 justify-center items-center"
        >
          <div
            v-for="area in areas"
            :key="area.id"
            class="flex flex-col justify-center bg-white items-center py-6 px-6 shadow-lg rounded-3xl space-y-3"
          >
            <div class="relative">
              <img :src="getImage(area.image)" alt="" class="w-full h-auto" />
              <span
                class="absolute top-6 left-6 bg-age-business-blue-200 rounded-xl text-white text-base font-medium uppercase px-6 py-4"
                >{{ area.type }}</span
              >
            </div>
            <div class="self-start px-2">
              <span class="text-2xl font-normal">{{ area.title }}</span>
            </div>
            <div class="px-2">
              <span
                class="flex justify-start text-left text-gray-400"
                style="line-height: 2em"
              >
                {{ area.description }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const getImage = (image) => require(`@/assets/b2b/area/${image}.png`);
  
  const areas = ref([
    {
      id: 1,
      title: "Agronegócio",
      type: "Agro",
      description:
        "Para o agronegócio, o Link Dedicado Age é mais do que uma conexão confiável, é a evolução digital no campo. Ao proporcionar uma conexão de alta performance, o agronegócio pode aproveitar ao máximo as tecnologias, como sensores agrícolas, drones e",
      image: "agro",
    },
    {
      id: 2,
      title: "Alimentos",
      type: "Alimentos",
      description:
        "Para o setor de alimentos, o Link Dedicado Age oferece uma comunicação consistente e segura para a gestão da cadeia de suprimentos, automação de processos de produção e controle de qualidade. Além disso, a conexão Age permite um melhor desenvolvimento de",
      image: "food",
    },
    {
      id: 3,
      title: "Energia",
      type: "Energia",
      description:
        "Empresas do setor de energia precisam de uma alta conexão para gerenciar redes inteligentes, monitorar ativos, realizar manutenção preditiva e garantir a segurança das operações. O link dedicado da Age Telecom oferece o suporte para essas operações,",
      image: "energy",
    },
    {
      id: 4,
      title: "Varejo",
      type: "Varejo",
      description:
        "No setor varejista, a rapidez na transmissão de dados é fundamental. O link dedicado Age permite um melhor desempenho dos sistemas que fazem gestão de inventário e implementam soluções de comércio eletrônico. Essa conectividade contribui diretamente para a experiência do cliente e a eficiência",
      image: "market",
    },
    {
      id: 5,
      title: "Segurança e monitoramento",
      type: "Segurança",
      description:
        "Empresas que atuam em segurança e monitoramento dependem de uma conexão de alto desempenho para garantir a eficácia de seus serviços. O link dedicado da Age Telecom é essencial para a transmissão de dados de câmeras de segurança, sistemas de alarme e monitoramento remoto em tempo real.",
      image: "security",
    },
  ]);
  </script>
  
  <style lang="scss" scoped></style>
  