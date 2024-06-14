<template>
  <div class="bg-age-business-blue-70 py-16">
    <div class="mb-8 px-8">
      <h1 class="text-age-business-blue-400 text-4xl font-semibold">
        Escolha a melhor solução para sua empresa
      </h1>
    </div>

    <div class="mt-4 mb-8 px-4">
      <table class="w-full shadow-2xl">
        <thead>
          <tr class="bg-age-business-blue-400 text-white">
            <th class="text-xs">Funcionalidades</th>
            <th v-for="servico in servicos" :key="servico.nome">
              {{ servico.nome }}<br />
              {{ servico.subnome }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="caracteristica in Object.keys(servicos[0].caracteristicas)"
            :key="caracteristica"
          >
            <td>
              <span
                class="text-age-business-blue-400 font-bold"
                style="font-size: 0.8em"
                >{{ caracteristica }}</span
              >
            </td>
            <td
              v-for="servico in servicos"
              :key="servico.nome + caracteristica"
            >
              <template
                v-if="
                  typeof servico.caracteristicas[caracteristica] === 'boolean'
                "
              >
                <div class="flex items-center justify-center">
                  <img
                    v-if="servico.caracteristicas[caracteristica]"
                    src="@/assets/b2b/checked.png"
                    alt="Check"
                    style="height: 1em; width: 1em"
                  />
                  <span v-else> </span>
                </div>
              </template>
              <template v-else>
                <span class="" style="font-size: 0.8em">
                  {{ servico.caracteristicas[caracteristica] }}
                </span>
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="text-xs font-medium px-12">
      <span>
        A <b>Age Fibra</b> se dedica a fornecer soluções personalizadas,
        transformando sua experiência em um verdadeiro sucesso!
      </span>
    </div>

    <div class="flex justify-center items-center mt-8">
      <div
        class="w-10/12 cursor-pointer rounded-lg bg-gradient-to-r from-age-business-blue-400 to-age-business-blue-200 py-2"
      >
        <a href="https://wa.me/556140404040" target="_blank" class="font-bold text-xl text-white">ENTRE EM CONTATO</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const servicos = ref([
  {
    nome: "Link Dedicado",
    caracteristicas: {
      "Fibra ótica de ponta a ponta": true,
      "Franquia ilimitada": true,
      "Conexão externa de rede": true,
      "Conexão interna de rede": true,
      "Conexão de VOIP": true,
      "NOC 24/7": true,
      "SLA de reparo": "Máximo 4h",
      MTTR: "Máximo 4h",
    },
  },
  {
    nome: "Banda Larga",
    subnome: "IP Dinâmico",
    caracteristicas: {
      "Fibra ótica de ponta a ponta": true,
      "Franquia ilimitada": true,
      "Conexão externa de rede": true,
      "Conexão interna de rede": true,
      "Conexão de VOIP": true,
      "NOC 24/7": false,
      "SLA de reparo": "Até 48h",
      MTTR: "Até 16h",
    },
  },
  {
    nome: "Banda Larga",
    subnome: " IP Fixo",
    caracteristicas: {
      "Fibra ótica de ponta a ponta": true,
      "Franquia ilimitada": true,
      "Conexão externa de rede": true,
      "Conexão interna de rede": true,
      "Conexão de VOIP": true,
      "NOC 24/7": false,
      "SLA de reparo": "Até 48h",
      MTTR: "Até 16h",
    },
  },
  {
    nome: "Lan to Lan",
    caracteristicas: {
      "Fibra ótica de ponta a ponta": true,
      "Franquia ilimitada": true,
      "Conexão externa de rede": false,
      "Conexão interna de rede": true,
      "Conexão de VOIP": false,
      "NOC 24/7": true,
      "SLA de reparo": "Máximo 4h",
      MTTR: "Máximo 4h",
    },
  },
]);
</script>

<style scoped lang="scss">
table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background-color: #fff;
  margin-top: 20px;
  border-radius: 15px;
  overflow: hidden;
}

th,
td {
  padding: 1px 2px;
  text-align: center;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  white-space: normal;
  word-wrap: break-word;
}

th {
  background-color: #002480;
  color: #ffffff;
  font-size: 0.5rem;
  font-weight: 700;
  border-right: none;
  font-family: "Poppins", sans-serif;
  width: calc(100% / 5);
}

td {
  color: #002480;
  font-size: 0.6rem;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
}

tr:last-child td {
  border-bottom: none;
}

tr:hover {
  background-color: #f5f5f5;
}

@media (max-width: 768px) {
  table {
    display: block;
    overflow-x: auto;
  }
  th,
  td {
    white-space: nowrap;
  }
}
</style>
