<template>
    <div
      class="relative w-screen overflow-hidden font-poppins bg-slate-50"
      style="height: 37.5em"
    >
      <img
        class="absolute inset-0 w-full h-full object-cover"
        :src="require('@/assets/b2b/HeroSection.png')"
        alt="Descrição da Imagem"
      />
      <div
        class="absolute inset-x-0 top-0 p-8 md:px-20 lg:px-60 xl:py-14 flex flex-col md:flex-row"
      > 
        <div class="flex-1 text-left space-y-6">
          <span class="text-3xl md:text-3xl lg:text-4xl xl:text-5xl">
            A
            <b class="font-bold text-age-business-blue-400">estabilidade</b> que
            você precisa <b>para o seu negócio</b>!
          </span>
        </div>
        <div class="flex-1"></div>
      </div>
      <div
        class="absolute space-x-4 inset-x-0 bottom-0 p-8 md:px-20 lg:px-60 xl:py-16 flex flex-col md:flex-row"
      >
        <div class="flex items-center text-left space-y-4 md:space-y-0">
          <div>
            <div
              class="flex-none p-6 text-xl md:text-sm lg:text-base xl:text-xl rounded-l-2xl bg-gradient-to-l from-age-business-blue-100 to-age-business-blue-400 text-white font-bold border-solid border-l-2 border-t-2 border-b-2 border-white"
            >
              <span>
                Banda larga<br />
                a partir de
              </span>
            </div>
            <div class="-mb-6 pl-1">
              <span class="font-bold text-sm">*Fazemos portabilidade</span>
            </div>
          </div>
  
          <div
            class="flex flex-col items-baseline font-montserrat bg-age-business-blue-400 pl-12 pr-8 py-6 rounded-2xl border-2 border-solid border-white"
          >
            <span
              class="text-xl md:text-xl lg:text-2xl xl:text-3xl text-white font-bold -mb-4"
            >
              R$
            </span>
            <div class="flex items-end">
              <span
                class="text-xl md:text-xl lg:text-2xl xl:text-7xl text-white font-black"
              >
                100
              </span>
              <span
                class="text-xl md:text-xl lg:text-2xl xl:text-1xl text-white font-bold pb-4"
              >
                ,00*
              </span>
            </div>
          </div>
        </div>
  
        <div class="flex-1 flex flex-col items-start space-y-4">
          <div
            class="flex items-center p-2 px-4 md:px-8 space-x-2 md:space-x-4 rounded-full bg-age-business-blue-400 text-white font-semibold text-base md:text-xl lg:text-2xl xl:text-4xl transition-all duration-300 ease-in-out"
          >
            <div
              class="bg-gradient-to-t from-age-business-blue-100 to-age-business-blue-400 rounded-full -ml-6"
            >
              <img
                class="p-2 md:p-3"
                :src="require('@/assets/b2b/ligacao.png')"
                alt="Ícone de Ligação"
              />
            </div>
            <div class="text-center text-sm md:text-base lg:text-xl xl:text-xl">
              <span>Link<br />Dedicado</span>
            </div>
          </div>
          <div
            class="flex items-center p-2 px-4 md:px-8 space-x-2 md:space-x-4 rounded-full bg-age-business-orange-400 text-white font-semibold text-base md:text-xl lg:text-2xl xl:text-4xl transition-all duration-300 ease-in-out"
          >
            <div
              class="bg-gradient-to-t from-age-business-orange-100 to-age-business-orange-400 rounded-full -ml-6"
            >
              <img
                class="p-2 md:p-3"
                :src="require('@/assets/b2b/rede.png')"
                alt="Ícone de Ligação"
              />
            </div>
            <div class="text-center text-sm md:text-base lg:text-xl xl:text-xl">
              <span>Fibra<br/>Apagada</span>
            </div>
          </div>
        </div>
  
        <div class="flex-1 flex justify-center items-end">
          <div class="flex-none mb-6 space-y-4">
            <div
              class="flex items-center p-2 px-8 space-x-2 md:space-x-4 rounded-md bg-gradient-to-l from-age-business-orange-100 to-age-business-orange-400 text-white font-semibold text-base md:text-xl lg:text-2xl xl:text-4xl transition-all duration-300 ease-in-out cursor-pointer shadow-orange"
            >
              <div
                class="text-center text-sm md:text-base lg:text-xl p-4"
              >
                <a href="https://wa.me/556140404040" target="_blank">Entre em contato</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup></script>
  
  <style lang="scss" scoped>
  /* Adicionar estilos customizados conforme necessário */
  </style>
  