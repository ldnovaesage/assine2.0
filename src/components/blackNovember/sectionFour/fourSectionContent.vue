<script>
export default {
  name: "FourContent",
  data() {
    return {
      span: [
        "<b>Internet 100% Fibra</b>, 100% Brasiliense,<br> com<b> preços justos.</b>",
        "<b>Só na Black age</b>"
      ]
    };
  },
  methods: {
    redirectWhatsApp() {
      const defaultURL =
        "https://api.whatsapp.com/send?phone=556140404040&text=Ol%C3%A1%21+Gostaria+de+contratar+os+planos+de+internet+fibra+da+Age";
      const googleURL = "https://me-qr.com/RImUYefA"; // Substitua pela URL que você deseja usar quando o parâmetro estiver presente

      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const parametro = urlParams.get("b1d01434621734be08d75952041a178d");

      const redirectTo =
        parametro === "(e)RxptY<@ih~R_Mw_i,|7ptQ26|bdq:"
          ? googleURL
          : defaultURL;

      window.open(redirectTo, "_blank");
    }
  },
  mounted() {
    // Chame a função quando o componente for montado
    window.updateWhatsAppLinks();
  }
};
</script>

<template>
  <div class="sectionFour-container">
    <div>
      <span class="titleContentSpan" v-html="span[0]"></span>
    </div>
    <div class="subTitle-container">
      <span class="subTitleContentSpan" v-html="span[1]"></span>
    </div>
    <div class="plans-button">
      <a
        target="_blank"
        class="whatsapp-link"
        style="text-decoration: none"
        href="https://api.whatsapp.com/send?phone=556140404040&text=Ol%C3%A1%21+Gostaria+de+conhecer+os+planos+de+internet+Black+November+Age"
      >Quero contratar</a>
    </div>
  </div>
</template>

<style lang="scss">
$background-page: #17191a;
$background-button: linear-gradient(to right, #facc22, #f83600);
$font-color-highlight: #fcc10a;
$font-color-default: #ffffff;

.sectionFour-container {
  background-color: $background-page;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;

  .titleContentSpan {
    color: $font-color-default;
    font-size: 2rem;
  }

  .subTitleContentSpan {
    color: $font-color-highlight;
    font-size: 3rem;
  }

  .subTitle-container {
    margin-top: 4vh;
  }

  .plans-button {
    width: 20%;
    padding: 2.5vh 3vw;
    background: $background-button;
    color: white;
    font-size: 1.6rem;
    font-weight: 600;
    border: none;
    cursor: pointer;
    border-radius: 2rem;
    margin-top: 6vh;

    a {
      color: white;
    }
  }
}

// Estilos responsivos para telas menores (smartphones)
@media only screen and (max-width: 600px) {
  .sectionFour-container {
    height: auto; // Altura automática para acomodar o conteúdo
    padding: 2vh 5%; // Ajuste no preenchimento para telas pequenas

    .titleContentSpan {
      font-size: 1.6rem; // Tamanho da fonte menor para o título
    }

    .subTitleContentSpan {
      font-size: 2rem; // Tamanho da fonte menor para o subtítulo
    }

    .plans-button {
      width: 60%; // Largura maior para o botão em telas pequenas
      padding: 2vh 5%; // Ajuste no preenchimento do botão
      font-size: 1.2rem; // Tamanho da fonte menor para o texto do botão
    }
  }
}

</style>