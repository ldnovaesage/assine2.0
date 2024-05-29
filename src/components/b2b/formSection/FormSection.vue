<template>
  <div
    class="w-screen flex justify-center items-center bg-blue-50 p-12 space-x-12 md:space-x-24"
  >
    <div>
      <img src="@/assets/b2b/formImage.png" alt="Formulário de Inscrição" />
    </div>
    <div
      class="flex flex-col font-poppins bg-white p-10 shadow-2xl rounded-2xl"
    >
      <div class="pb-24 px-12 pt-12">
        <span
          class="text-age-business-blue-400 font-poppins text-5xl font-semibold"
        >
          Cadastre-se e receba<br />
          planos promocionais.
        </span>
      </div>
      <form class="space-y-6" name="b2b">
        <div class="flex flex-col md:flex-row md:space-x-6">
          <div class="flex-1 flex flex-col">
            <label for="nome" class="font-semibold self-start mb-2"
              >Nome<b class="font-semibold text-red-600">*</b></label
            >
            <input
              id="name"
              type="text"
              placeholder="Nome"
              class="mt-1 p-3 border border-age-business-blue-50 rounded-md"
              required
            />
          </div>
          <div class="flex-1 flex flex-col">
            <label for="sobrenome" class="font-semibold self-start mb-2"
              >Sobrenome<b class="font-semibold text-red-600">*</b></label
            >
            <input
              id="lastname"
              type="text"
              placeholder="Sobrenome"
              class="mt-1 p-3 border border-age-business-blue-50 rounded-md"
              required
            />
          </div>
        </div>
        <div class="flex flex-col md:flex-row md:space-x-6">
          <div class="flex-1 flex flex-col">
            <label for="cidade" class="font-semibold self-start mb-2"
              >Cidade<b class="text-red-600">*</b></label
            >
            <select
              id="city"
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
          <div class="flex-1 flex flex-col">
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
                id="number"
                type="text"
                v-maska:[maskOptions]
                placeholder="Número de Telefone"
                class="flex-1 p-3 rounded-l-none border border-age-business-blue-50 rounded-md"
                required
              />
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <label for="email" class="font-semibold self-start mb-2"
            >E-mail<b class="font-semibold text-red-600">*</b></label
          >
          <input
            id="email"
            type="email"
            placeholder="Seu melhor e-mail"
            class="mt-1 p-3 border border-age-business-blue-50 rounded-md"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            class="mt-6 p-4 w-full bg-gradient-to-l from-age-business-blue-100 to-age-business-blue-400 text-white font-extrabold text-xl rounded-xl shadow"
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
  import { globalData } from "@/store/globalData";
  import { vMaska } from "maska";

  const maskOptions = {
    mask: "(##) #####-####",
    eager: true,
  }

  const cidades = ref(globalData.cidades);

  const ddds = ref([
    { code: "55", label: "55", icon: require("@/assets/b2b/form/brazil.png") },
  ]);

  const selectedDdd = ref(ddds.value[0]);
</script>

<style lang="scss" scoped></style>
