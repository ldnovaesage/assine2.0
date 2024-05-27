<template>
  <div
    class="w-screen flex flex-col-reverse justify-center items-center bg-blue-50 p-2 pt-8"
  >
    <div class="mt-8">
      <img src="@/assets/b2b/formImage.png" alt="Formulário de Inscrição" />
    </div>
    <div class="flex flex-col font-poppins bg-white shadow-2xl rounded-2xl">
      <div class="pb-8 px-2 pt-8">
        <span
          class="text-age-business-blue-400 font-poppins text-4xl font-semibold"
        >
          Cadastre-se e receba planos promocionais.
        </span>
      </div>
      <form class="">
        <div class="flex flex-col md:flex-row md:space-x-6 px-4">
          <div class="flex-1 flex flex-col">
            <label for="nome" class="font-semibold self-start mb-2"
              >Nome<b class="font-semibold text-red-600">*</b></label
            >
            <input
              id="nome"
              type="text"
              placeholder="Nome"
              class="mt-1 p-3 border border-age-business-blue-50 rounded-md"
              required
            />
          </div>
          <div class="flex-1 flex flex-col pt-4">
            <label for="sobrenome" class="font-semibold self-start mb-2"
              >Sobrenome<b class="font-semibold text-red-600">*</b></label
            >
            <input
              id="sobrenome"
              type="text"
              placeholder="Sobrenome"
              class="mt-1 p-3 border border-age-business-blue-50 rounded-md"
              required
            />
          </div>
        </div>
        <div class="flex flex-col md:flex-row md:space-x-6 px-4 pt-4">
          <div class="flex-1 flex flex-col">
            <label for="cidade" class="font-semibold self-start mb-2"
              >Cidade<b class="text-red-600">*</b></label
            >
            <select
              id="cidade"
              class="mt-1 p-3 bg-white border border-age-business-blue-50 rounded-md"
              required
            >
              <option
                v-for="cidade in cidades"
                :key="cidade.id"
                :value="cidade.id"
              >
                {{ cidade.name }}
              </option>
            </select>
          </div>
          <div class="flex-1 flex flex-col pt-4">
            <label for="telefone" class="font-semibold self-start mb-2"
              >Número de Telefone<b class="text-red-600">*</b></label
            >
            <div class="flex flex-row mt-1">
              <custom-dropdown
                :options="ddds"
                v-model="selectedDdd"
                placeholder="Selecione um DDD"
              >
                <template #option="{ option }">
                  <div class="flex items-center">
                    <img
                      :src="option.icon"
                      :alt="option.label"
                      class="h-6 w-6 mr-2"
                    />
                  </div>
                </template>
              </custom-dropdown>
              <input
                id="telefone"
                type="text"
                placeholder="Número de Telefone"
                class="p-3 rounded-l-none border border-age-business-blue-50 rounded-md"
                required
              />
            </div>
          </div>
        </div>
        <div class="flex flex-col p-4">
          <label for="email" class="font-semibold self-start mb-2"
            >E-mail<b class="font-semibold text-red-600">*</b></label
          >
          <input
            id="email"
            type="text"
            placeholder="Seu melhor e-mail"
            class="mt-1 p-3 border border-age-business-blue-50 rounded-md"
            required
          />
        </div>
        <div class="px-4 pb-8">
          <button
            type="submit"
            class="mt-6 p-3 w-full bg-gradient-to-l from-age-business-blue-100 to-age-business-blue-400 text-white font-extrabold text-base rounded-xl shadow"
          >
            Garanta já
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CustomDropdown from "@/components/_fragments/dropdown/CustomDropdown.vue";

const cidades = ref([
        { name: "Arapoanga", id: "Arapoanga" },
        { name: "Arniqueira", id: "Arniqueira" },
        { name: "Brazlândia", id: "Brazlandia" },
        { name: "Candangolândia", id: "Candangolandia" },
        { name: "Ceilândia", id: "Ceilandia" },
        { name: "Cruzeiro", id: "Cruzeiro" },
        { name: "Cruzeiro Velho", id: "CruzeiroVelho" },
        { name: "Gama", id: "Gama" },
        { name: "Guará", id: "Guara" },
        { name: "Itapoã", id: "Itapoa" },
        { name: "Jardim Botânico", id: "JardimBotanico" },
        { name: "Lago Norte", id: "LagoNorte" },
        { name: "Lago Sul", id: "LagoSul" },
        { name: "Noroeste", id: "Noroeste" },
        { name: "Núcleo Bandeirante", id: "NucleoBandeirante" },
        { name: "Paranoá", id: "Paranoa" },
        { name: "Park Way", id: "ParkWay" },
        { name: "Planaltina", id: "Planaltina" },
        { name: "Plano Piloto", id: "PlanoPiloto" },
        { name: "Polo de Modas Guará", id: "PolodeModas" },
        { name: "Pôr do Sol", id: "PorDoSol" },
        { name: "Recanto das Emas", id: "RecantodasEmas" },
        { name: "Riacho Fundo I", id: "RiachoFundo1" },
        { name: "Riacho Fundo II", id: "RiachoFundo2" },
        { name: "SAAN", id: "SAAN" },
        { name: "Samambaia", id: "Samambaia" },
        { name: "Santa Maria", id: "SantaMaria" },
        { name: "São Sebastião", id: "SaoSebastiao" },
        { name: "SIA", id: "SIA" },
        { name: "Sobradinho I", id: "Sobradinho1" },
        { name: "Sobradinho II", id: "Sobradinho2" },
        { name: "SOF SUL", id: "SOFSUL" },
        { name: "Sol Nascente", id: "SolNascente" },
        { name: "Taguatinga", id: "Taguatinga" },
        { name: "Taquari", id: "Taquari" },
        { name: "Varjão", id: "Varjao" },
        { name: "Vicente Pires", id: "VicentePires" },
]);

const ddds = ref([
  { code: "55", label: "55", icon: require("@/assets/b2b/form/brazil.png") },
]);

const selectedDdd = ref(ddds.value[0]);
</script>

<style lang="scss" scoped></style>
