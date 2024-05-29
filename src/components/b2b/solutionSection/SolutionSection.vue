<template>
  <div class="bg-age-business-blue-70 py-16">
    <div class="mb-8">
      <h1 class="text-age-business-blue-400 text-7xl font-semibold">
        Escolha a melhor solução<br />para sua empresa
      </h1>
    </div>

    <div class="text-3xl font-medium">
      <span>
        A <b>Age Fibra</b> se dedica a fornecer soluções personalizadas,<br />
        transformando sua experiência conosco em um verdadeiro caso de sucesso!
      </span>
    </div>

    <div class="mt-20 px-60">
      <table class="w-full shadow-2xl">
        <thead>
          <tr class="bg-age-business-blue-400 text-white">
            <th>Funcionalidades</th>
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
                class="text-age-business-blue-400 font-bold text-2xl px-2"
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
                    style="height: 1.8em; width: 1.8em"
                  />
                  <span v-else> </span>
                </div>
              </template>
              <template v-else>
                {{ servico.caracteristicas[caracteristica] }}
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="flex justify-center items-center mt-24">
      <div
        class="w-4/12 cursor-pointer rounded-xl bg-gradient-to-r from-age-business-blue-400 to-age-business-blue-200 py-4"
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
      "Franquia ilimitada": true,
      "Conexão externa de rede": true,
      "Conexão interna de rede": true,
      "Fibra ótica de ponta a ponta": true,
      "Conexão de VOIP": true,
      "NOC 24/7": true,
      "SLA de reparo": "Mínimo 4h",
      MTTR: "Mínimo 4h",
    },
  },
  {
    nome: "Banda Larga",
    subnome: "IP Dinâmico",
    caracteristicas: {
      "Franquia ilimitada": true,
      "Conexão externa de rede": true,
      "Conexão interna de rede": true,
      "Fibra ótica de ponta a ponta": true,
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
      "Franquia ilimitada": true,
      "Conexão externa de rede": true,
      "Conexão interna de rede": true,
      "Fibra ótica de ponta a ponta": true,
      "Conexão de VOIP": true,
      "NOC 24/7": false,
      "SLA de reparo": "Até 48h",
      MTTR: "Até 16h",
    },
  },
  {
    nome: "Lan to Lan",
    caracteristicas: {
      "Franquia ilimitada": true,
      "Conexão externa de rede": false,
      "Conexão interna de rede": true,
      "Fibra ótica de ponta a ponta": true,
      "Conexão de VOIP": false,
      "NOC 24/7": true,
      "SLA de reparo": "Mínimo 4h",
      MTTR: "Mínimo 4h",
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
  border-radius: 40px;
  overflow: hidden;
}

th,
td {
  padding: 12px 20px;
  text-align: center;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  white-space: normal;
  word-wrap: break-word;
}

th {
  background-color: #002480;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 700;
  border-right: none;
  font-family: "Poppins", sans-serif;
  width: calc(100% / 5);
}

td {
  color: #002480;
  font-size: 1.5rem;
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
