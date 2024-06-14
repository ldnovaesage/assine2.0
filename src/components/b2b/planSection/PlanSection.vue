<template>
  <div class="w-screen flex flex-col bg-gray-100">
    <div class="flex flex-row justify-center items-center py-5">
      <div class="relative bg-white py-4 px-12 shadow-lg tooltip mr-4">
        <span class="text-age-business-blue-400 font-semibold"
          >Melhor negócio</span
        >
        <div class="arrow"></div>
      </div>

      <div
        class="inline-flex justify-center items-center p-2 space-x-2 bg-age-business-blue-50 rounded-lg"
      >
        <button
          @click="setSelected('link')"
          :class="{
            'bg-gradient-to-l from-age-business-blue-100 to-age-business-blue-400 text-white rounded-lg':
              selectedValue === 'link',
          }"
          class="py-5 px-16 text-lg font-semibold transition-colors duration-300"
        >
          Link
        </button>
        <button
          @click="setSelected('banda')"
          :class="{
            'bg-gradient-to-l from-age-business-orange-100 to-age-business-orange-400 text-white rounded-lg':
              selectedValue === 'banda',
          }"
          class="py-5 px-16 text-age-business-blue-400 text-lg font-semibold transition-colors duration-300"
        >
          Banda
        </button>
      </div>
    </div>

    <div
      v-if="selectedValue === 'link'"
      class="flex flex-col justify-center items-center"
    >
      <div class="flex flex-row justify-center items-start py-8 space-x-6">
        <div
          v-for="link in linkPlans"
          :key="link.id"
          class="rounded-2xl"
          :class="{
            'text-black bg-white': !link.emphasis,
            'text-white bg-age-business-blue-400': link.emphasis,
          }"
        >
          <div class="flex self-start p-4 z-50">
            <img
              :src="getImage(link.insignia)"
              :alt="link.insignia"
              class="h-12"
              :class="{ 'h-20': link.insignia === 'maisvendido' }"
            />
          </div>

          <h1
            class="flex flex-col items-center justify-center text-11xl font-black relative -mt-8"
            :class="{
              'text-age-business-blue-100': !link.emphasis,
              'text-white': link.emphasis,
              ' -mt-18': link.insignia === 'maisvendido',
            }"
          >
            <span class="relative z-10 flex items-center">
              {{ link.size }}
              <img
                src="@/assets/b2b/mb.png"
                alt=""
                class="h-9 absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2"
              />
            </span>
          </h1>

          <div
            class="flex flex-row items-center justify-center relative pb-12 -mt-12"
            :class="{
              'text-age-business-blue-400': !link.emphasis,
              'text-white bg-age-business-blue-400': link.emphasis,
            }"
          >
            <span class="text-3xl font-bold mt-1 self-start">R$</span>
            <span class="text-8xl font-black">{{ link.value }}</span>
            <div class="flex flex-col">
              <span class="font-bold text-3xl">{{ link.cents }}</span>
              <span
                class="font-medium text-xl"
                :class="{
                  ' text-gray-400': !link.emphasis,
                  'text-white bg-age-business-blue-400': link.emphasis,
                }"
                >/mês</span
              >
            </div>
          </div>

          <div
            class="self-center border-b border-solid border-gray-300 mx-8"
          ></div>

          <div
            class="self-center mt-6 font-poppins"
            :class="{
              'mb-16': !link.emphasis,
              'mb-20': link.emphasis,
            }"
          >
            <div
              v-for="option in link.options"
              :key="option.label"
              class="ml-8 mb-3 last:mb-0"
            >
              <div class="flex flex-row items-center justify-start space-x-4">
                <div
                  :class="{
                    'p-2 fill-age-business-blue-100 bg-blue-100 rounded-md':
                      !link.emphasis,
                    'p-2 fill-white bg-gradient-to-b from-blue-500 to-blue-400 rounded-md':
                      link.emphasis,
                  }"
                >
                  <div>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.13119 8C2.92366 8.0004 2.72163 7.92384 2.55559 7.78188L2.54529 7.77307L0.377267 5.88204C0.276857 5.79426 0.192593 5.6848 0.129285 5.55989C0.0659762 5.43499 0.0248655 5.29709 0.00829708 5.15406C-0.00827132 5.01104 2.66761e-05 4.8657 0.0327206 4.72633C0.0654145 4.58697 0.121862 4.45631 0.198841 4.34182C0.27582 4.22733 0.371824 4.13125 0.481369 4.05906C0.590913 3.98688 0.711853 3.94 0.837286 3.92111C0.962719 3.90222 1.09019 3.91168 1.21241 3.94896C1.33464 3.98624 1.44923 4.0506 1.54964 4.13837L2.95391 5.36624L6.27228 0.429994C6.34922 0.315551 6.44519 0.219508 6.55469 0.147352C6.66419 0.0751959 6.78508 0.0283391 6.91046 0.00945561C7.03584 -0.0094279 7.16325 3.25271e-05 7.28543 0.0372964C7.4076 0.0745603 7.52214 0.138898 7.62251 0.226636L7.62279 0.226875L7.6022 0.259483L7.62335 0.226875C7.82584 0.404322 7.95832 0.666116 7.99172 0.954811C8.02511 1.24351 7.9567 1.53552 7.80149 1.76676L3.89837 7.57029C3.80807 7.70401 3.69197 7.81221 3.55907 7.88651C3.42617 7.9608 3.28005 7.99919 3.13204 7.9987L3.13119 8Z"
                        :class="{
                          'fill-age-business-blue-100': !link.emphasis,
                          'fill-white': link.emphasis,
                        }"
                      />
                    </svg>
                  </div>
                </div>
                <span class="flex-wrap w-8/12 text-base text-left">
                  {{ option.label }}
                </span>
              </div>
            </div>
          </div>

          <div
            class="self-center mt-4"
            :class="{
              'mb-16': !link.emphasis,
              'mb-20': link.emphasis,
            }"
          >
            <div class="flex flex-col gap-5">
              <a href="https://wa.me/556140404040" target="_blank">
                <span
                  :class="{
                    'bg-gradient-to-l from-age-business-blue-400 to-age-business-blue-100 text-white':
                      !link.emphasis,
                    'bg-gradient-to-l from-age-business-orange-400 to-age-business-orange-100 ':
                      link.emphasis,
                  }"
                  class="py-4 px-28 rounded-xl font-semibold cursor-pointer text-xl font-poppins"
                  >Garanta Já</span
                >
              </a>
            <span> *Planos de 24 meses</span>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-12 mb-16">
        <span class="text-gray-500 text-base"
          >Tem alguma dúvida ou precisa de ajuda?
          <a
            href="teste"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-500"
            >Suporte</a
          ></span
        >
      </div>
    </div>

    <div
      v-if="selectedValue === 'banda'"
      class="flex flex-col justify-center items-center"
    >
      <div class="flex flex-row justify-center items-start py-8 space-x-6">
        <div
          v-for="band in bandaPlans"
          :key="band.id"
          class="rounded-2xl"
          :class="{
            'text-black bg-white': !band.emphasis,
            'text-white bg-age-business-orange-200': band.emphasis,
          }"
        >
          <div class="flex self-start p-4 z-50">
            <img
              :src="getImage(band.insignia)"
              :alt="band.insignia"
              class="h-12"
              :class="{ 'h-20': band.insignia === 'maisvendido' }"
            />
          </div>

          <div class="flex justify-center items-center">
            <span
              class="font-extrabold"
              :class="{
                'text-age-business-orange-400': !band.emphasis,
                'text-white': band.emphasis,
                '-mt-16': band.insignia === 'maisvendido',
              }"
              >{{ band.title }}</span
            >
          </div>
          <h1
            class="flex flex-col items-center justify-center text-11xl font-black relative -mt-14"
            :class="{
              'text-age-business-orange-200': !band.emphasis,
              'text-white': band.emphasis,
              '-mt-16': band.insignia === 'maisvendido',
            }"
          >
            <span class="relative z-10 flex items-center">
              {{ band.size }}
              <img
                v-if="band.mb"
                src="@/assets/b2b/mb.png"
                alt=""
                class="h-9 absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2"
              />
              <img
                v-if="band.line"
                src="@/assets/b2b/line.png"
                alt=""
                class="h-9 absolute right-0 bottom-1/4 transform translate-x-2"
              />
            </span>
          </h1>

          <div
            class="flex flex-row items-center justify-center relative pb-12 -mt-12"
            :class="{
              'text-age-business-orange-400': !band.emphasis,
              'text-white ': band.emphasis,
            }"
          >
            <span class="text-3xl font-bold mt-1 self-start">R$</span>
            <span class="text-8xl font-black">{{ band.value }}</span>
            <div class="flex flex-col">
              <span class="font-bold text-3xl">{{ band.cents }}</span>
              <span
                class="font-medium text-xl"
                :class="{
                  ' text-age-business-orange-400': !band.emphasis,
                  'text-white ': band.emphasis,
                }"
                >/mês</span
              >
            </div>
          </div>

          <div
            class="self-center border-b border-solid border-gray-300 mx-8"
          ></div>

          <div
            class="self-center mt-6"
            :class="{
              'mb-16': !band.emphasis,
              'mb-20': band.emphasis,
            }"
          >
            <div
              v-for="option in band.options"
              :key="option.label"
              class="ml-8 mb-3 last:mb-0"
            >
              <div class="flex flex-row items-center justify-start space-x-4">
                <div
                  :class="{
                    'p-2 fill-age-business-blue-100 bg-blue-100 rounded-md':
                      !band.emphasis,
                    'p-2 fill-white bg-age-business-orange-400 rounded-md':
                      band.emphasis,
                  }"
                >
                  <div>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.13119 8C2.92366 8.0004 2.72163 7.92384 2.55559 7.78188L2.54529 7.77307L0.377267 5.88204C0.276857 5.79426 0.192593 5.6848 0.129285 5.55989C0.0659762 5.43499 0.0248655 5.29709 0.00829708 5.15406C-0.00827132 5.01104 2.66761e-05 4.8657 0.0327206 4.72633C0.0654145 4.58697 0.121862 4.45631 0.198841 4.34182C0.27582 4.22733 0.371824 4.13125 0.481369 4.05906C0.590913 3.98688 0.711853 3.94 0.837286 3.92111C0.962719 3.90222 1.09019 3.91168 1.21241 3.94896C1.33464 3.98624 1.44923 4.0506 1.54964 4.13837L2.95391 5.36624L6.27228 0.429994C6.34922 0.315551 6.44519 0.219508 6.55469 0.147352C6.66419 0.0751959 6.78508 0.0283391 6.91046 0.00945561C7.03584 -0.0094279 7.16325 3.25271e-05 7.28543 0.0372964C7.4076 0.0745603 7.52214 0.138898 7.62251 0.226636L7.62279 0.226875L7.6022 0.259483L7.62335 0.226875C7.82584 0.404322 7.95832 0.666116 7.99172 0.954811C8.02511 1.24351 7.9567 1.53552 7.80149 1.76676L3.89837 7.57029C3.80807 7.70401 3.69197 7.81221 3.55907 7.88651C3.42617 7.9608 3.28005 7.99919 3.13204 7.9987L3.13119 8Z"
                        :class="{
                          'fill-age-business-blue-100': !band.emphasis,
                          'fill-white': band.emphasis,
                        }"
                      />
                    </svg>
                  </div>
                </div>
                <span class="flex-wrap w-8/12 text-base text-left">
                  {{ option.label }}
                </span>
              </div>
            </div>
          </div>

          <div
            class="self-center mt-4"
            :class="{
              'mb-16': !band.emphasis,
              'mb-20': band.emphasis,
            }"
          >
            <div class="flex flex-col gap-5">
              <a href="https://wa.me/556140404040" target="_blank">
                <span
                  :class="{
                    'bg-gradient-to-l from-age-business-orange-400 to-age-business-orange-100 text-white':
                      !band.emphasis,
                    'bg-gradient-to-l from-age-business-blue-400 to-age-business-blue-100 ':
                      band.emphasis,
                  }"
                  class="py-4 px-28 rounded-xl font-semibold cursor-pointer text-xl"
                  >Garanta Já</span
                >
              </a>
              <span>*Planos de 12 meses</span>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-12 mb-16">
        <span class="text-gray-500 text-base"
          >Tem alguma dúvida ou precisa de ajuda?
          <a
            href="teste"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-500"
            >Suporte</a
          ></span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useMainStore } from "@/store/useMainStore";

const store = useMainStore();

const selectedValue = computed(() => store.selectedValue);
const setSelected = (value) => store.setSelectedValue(value);

const getImage = (insignia) => require(`@/assets/b2b/${insignia}.png`);

const linkPlans = ref([
  {
    id: 1,
    insignia: "maisvendido",
    size: "100",
    value: "899",
    cents: ",00",
    options: [
      { label: "Noc de monitoramento 24x7" },
      { label: "Sla de atendimento máximo 4h." },
      { label: "Rede 100% própria" },
      { label: "Maior rede de fibra óptica do Distrito Federal" },
    ],
    mb: true,
    emphasis: false,
  },
  {
    id: 2,
    insignia: "coroa",
    size: "50",
    value: "649",
    cents: ",00",
    options: [
      { label: "Noc de monitoramento 24x7" },
      { label: "Sla de atendimento máximo 4h." },
      { label: "Rede 100% própria" },
      { label: "Maior rede de fibra óptica do Distrito Federal" },
    ],
    mb: true,
    emphasis: true,
  },
  {
    id: 3,
    insignia: "star",
    size: "200",
    value: "1.249",
    cents: ",00",
    options: [
      { label: "Noc de monitoramento 24x7" },
      { label: "Sla de atendimento máximo 4h." },
      { label: "Rede 100% própria" },
      { label: "Maior rede de fibra óptica do Distrito Federal" },
    ],
    mb: true,
    emphasis: false,
  },
]);

const bandaPlans = ref([
  {
    id: 1,
    insignia: "bandCircle",
    title: "COMBO",
    size: "600",
    value: "100",
    cents: ",00",
    line: true,
    options: [
      { label: "Noc de monitoramento 24x7" },
      { label: "Sla de atendimento máximo 4h." },
      { label: "Rede 100% própria" },
      { label: "Maior rede de fibra óptica do Distrito Federal" },
    ],
    mb: true,
    emphasis: false,
  },
  {
    id: 2,
    insignia: "bandCoroa",
    title: "COMBO",
    size: "800",
    value: "130",
    cents: ",00",
    line: false,
    options: [
      { label: "Noc de monitoramento 24x7" },
      { label: "Sla de atendimento máximo 4h." },
      { label: "Rede 100% própria" },
      { label: "Maior rede de fibra óptica do Distrito Federal" },
    ],
    mb: true,
    emphasis: true,
  },
  {
    id: 3,
    insignia: "bandStar",
    title: "COMBO",
    size: "1GB",
    value: "180",
    cents: ",00",
    line: true,
    options: [
      { label: "Noc de monitoramento 24x7" },
      { label: "Sla de atendimento máximo 4h." },
      { label: "Rede 100% própria" },
      { label: "Maior rede de fibra óptica do Distrito Federal" },
    ],
    mb: false,
    emphasis: false,
  },
]);
</script>

<style>
.tooltip {
  position: relative;
}

.arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
}

.arrow {
  bottom: 100%;
  left: 50%;
  border-width: 8px 8px 0 8px;
  border-color: white transparent transparent transparent;
  transform: translateX(-50%);
}
</style>
