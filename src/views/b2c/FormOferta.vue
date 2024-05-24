<script>
import CustomInput from "@/views/b2c/CustomInput.vue";

export default {
  props: ["valor"],
  data(props) {
    return {
      localValue: props.valor,
    };
  },
  components: {
    CustomInput,
  },
};

</script>

<template>
  <form action="#" method="get" class="info-form" name="assine">
    <custom-input placeholderValor="Digite seu nome" nameValor="name" :urlIcon="require('@/assets/cardOferta/user.svg')"></custom-input>
    <custom-input placeholderValor="Seu e-mail" nameValor="email" :urlIcon="require('@/assets/cardOferta/password.svg')"></custom-input>
    <custom-input placeholderValor="(DDD) Nº de telefone" nameValor="telefone" :urlIcon="require('@/assets/cardOferta/phone.svg')"></custom-input>
    <custom-input placeholderValor="Selecione sua cidade" nameValor="city" :urlIcon="require('@/assets/cardOferta/location.svg')"></custom-input>
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

@media only screen and (max-width: 952px) {
  .info-form{
    width: 100%;
    gap: 0.6rem;
  }

  .custom-button {
    font-size: 18px;
  }
}

</style>
