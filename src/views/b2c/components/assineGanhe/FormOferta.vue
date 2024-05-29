<script>
import CustomInput from "@/views/b2c/components/assineGanhe/CustomInput.vue";
import CustomSelectCityInput from "@/views/b2c/components/assineGanhe/CustomSelecCitytInput.vue";
import { vMaska } from "maska";

export default {
  directives: { maska: vMaska },
  props: ["valor"],
  data(props) {
    return {
      maskOptions: {
        mask: "(##) #####-####",
        eager: true,
      },
      localValue: props.valor,
    };
  },
  components: {
    CustomInput,
    CustomSelectCityInput
  },
};

</script>

<template>
  <form action="#" method="get" class="info-form" name="cadastro">
    <custom-input typeValor="text" placeholderValor="Digite seu nome" idValor="name" nameValor="name" :urlIcon="require('@/assets/cardOferta/user.svg')"></custom-input>
    <custom-input typeValor="email" placeholderValor="Seu e-mail" idValor="email" nameValor="email" :urlIcon="require('@/assets/cardOferta/password.svg')"></custom-input>
    <custom-input typeValor="text" placeholderValor="(DDD) Nº de telefone" idValor="telefone" v-maska:[maskOptions] nameValor="telefone" :urlIcon="require('@/assets/cardOferta/phone.svg')"></custom-input>
    <custom-select-city-input placeholderValor="Selecione sua cidade" idValor="city" nameValor="city" :urlIcon="require('@/assets/cardOferta/location.svg')"></custom-select-city-input>
    <button type="submit"
      class="custom-button bg-orange-500 hover:bg-orange-700 text-white py-4 rounded-full mt-6 w-full px-8 text-md shadow-md"
    >
      RECEBER MINHA OFERTA
    </button>
    <a href="#" class="mt-3 text-sm text-center text-gray-400"
      >Política de privacidade</a
    >
  </form>
</template>

<style scoped lang="scss">
.info-form {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  width: 85%;
}

@media only screen and (max-width: 1024px) {
  .info-form{
    width: 100%;
    gap: 0.6rem;
  }

  .custom-button {
    font-size: 18px;
  }
}

</style>
