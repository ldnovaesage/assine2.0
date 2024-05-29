<script>
import FormOferta from "@/views/b2c/components/assineGanhe/FormOferta.vue";

export default {
  name: "CardOferta",
  components: { FormOferta },
};
</script>

<template>
  <div class="p-oferta shadow-2xl">
    <div class="f-esquerda">
      <img class="overlay" src="../../../../assets/cardOferta/overlay.png">
      <img class="logo" src="../../../../assets/cardOferta/logo-age.svg" alt="Age Telecom">
    </div>
    <div class="f-direita p-16">
      <div class="cabecalho-form">
        <h3 class="text-2xl font-bold text-center">
          CADASTRE-SE E RECEBA UMA OFERTA ESPECIAL
        </h3>
        <p class="text-gray-400 text-md text-center">
          Preencha suas informações abaixo e nossa equipe entrará em contato com
          você!
        </p>
      </div>
      <FormOferta></FormOferta>
    </div>
  </div>
</template>

<style scoped lang="scss">
.overlay {
  z-index: 0;
  position: absolute;
  bottom: 0; 
  left: 50%; 
  transform: translateX(-50%);
  width: 100%;
}

.logo {
  z-index: 1;
  position: absolute;
  bottom: 30px; 
  left: 50%; 
  transform: translateX(-50%);
}

.p-oferta {
  width: 55%;
  height: 700px;
  display: flex;
  flex-direction: row;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background-color: white;
}

.f-esquerda {
  position: relative;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  flex: 1;
  background-image: url("../../../../assets/cardOferta/bg.png");
}

.f-direita {
  flex: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.cabecalho-form h3 {
  font-size: 30px;
}

.cabecalho-form p {
  margin-top: 8px;
  font-size: 16px;
}

@media only screen and (max-width: 1024px) {
  .cabecalho-form {
    margin: 0 !important;
  }

  .cabecalho-form h3 {
    font-size: 26px;
  }

  .cabecalho-form p {
    font-size: 14px;
  }

  .p-oferta {
    display: flex;
    width: 96vw;
    height: 60%;
    flex-direction: column-reverse;

  }

  .f-esquerda {
    flex: 1;
    width: 100%;
    height: 648px;
    background-image: url("../../../../assets/cardOferta/bg-mobile.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .f-direita {
    flex: 2;
    height: 938px;
    padding-top: 0;
    padding-bottom: 0;
    margin: -100px 0;
  }
}
</style>
