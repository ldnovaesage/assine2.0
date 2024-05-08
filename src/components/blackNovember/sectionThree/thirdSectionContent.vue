<script>
export default {
  name: "ThirdContent",
  data() {
    return {
      offer: [
        "<b>Black age</b>, Pague menos, <b>ganhando mais!</b><br><b>3 meses com alta conectividade</b>,<br>instalação 100% gratuita e com <b>franquia ilimitada</b>.",
        "internet 100% fibra óptica<br><b>Plano Basic</b>",
        "480<b>MB</b>",
        "por<br>apenas",
        "<b>59,99</b>",
        "ao<br>mês",
        "<b>O que oferecemos</b><br><br>Franquias ilimitadas<br>Wi-fi de alta performance<br>Instalação grátis" // Alterado aqui para incluir todos os itens
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
  <div class="thirdSection-container">
    <div class="offers-container">
      <span class="titleContentSpan" v-html="offer[0]"></span>
    </div>
    <div class="plans-container">
      <div class="plans-row">
        <div class="plans-columns-left" v-html="offer[1]"></div>
        <div class="plans-columns-center" v-html="offer[2]"></div>
        <div class="plans-columns-right">
          <div class="row">
            <div class="first-column" v-html="offer[3]"></div>
            <div class="second-column" v-html="offer[4]"></div>
            <div class="third-column" v-html="offer[5]"></div>
          </div>
        </div>
      </div>
      <div class="separator"></div>
      <div class="plans-second-row">
        <div class="plans-columns-left" v-html="offer[6]"></div>
        <!-- Alterado para usar o índice 6 da array 'offer' -->
        <div class="plans-columns-center">
          <img src="https://assinenovo.s3.sa-east-1.amazonaws.com/assets/blackNovember/icones.png" alt />
        </div>
        <div class="plans-columns-right">
          <a
            target="_blank"
            class="whatsapp-link"
            style="text-decoration: none"
            href="https://api.whatsapp.com/send?phone=556140404040&text=Ol%C3%A1%21+Gostaria+de+conhecer+os+planos+de+internet+Black+November+Age"
          >
            <div class="plans-button">Quero contratar</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
$background-page: #17191a;
$thirdSection-font-title: #ffffff90;
$background-container: linear-gradient(to bottom, #3f4345, #272a2c);
$background-button: linear-gradient(to right, #facc22, #f83600);
$font-color-default: #ffffff;
$font-color-highlight: #fcc10a;
$font-weight-black: 800;
$font-size-title: 1.5rem;

.thirdSection-container {
  height: 70vh;
  background-color: $background-page;
  overflow: hidden;

  .offers-container {
    color: $thirdSection-font-title;
    font-size: $font-size-title;
    padding-top: 6vh;

    b {
      font-weight: $font-weight-black;
    }
  }

  .plans-container {
    margin-top: 6vh;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    height: 40vh;
    width: 99vw;
    background: $background-container;
    justify-content: space-between;
    border-radius: 2rem;

    .plans-row {
      display: flex;
      justify-content: space-between;

      .plans-columns-left {
        text-align: left;
        margin: 8vh 0 0 5vw;
        padding: 10px;
        flex-grow: 1;
        width: 33%;
        font-weight: 500;
        color: $font-color-default;

        b {
          font-size: 2rem;
          font-weight: 800;
          color: $font-color-highlight;
        }
      }

      .plans-columns-center {
        font-size: 4rem;
        margin: 8vh 5vw 0 5vw;
        flex-grow: 1;
        width: 33%;
        font-weight: 900;
        color: $font-color-highlight;

        b {
          font-size: 1.2rem;
        }
      }

      .plans-columns-right {
        margin: 8vh 5vw 0 0;
        padding: 10px;
        flex-grow: 1;
        width: 33%;

        .row {
          display: flex;
          flex-direction: columns;
          justify-content: center;
          align-content: center;

          .first-column {
            text-align: right;
            padding-top: 3px;
            padding-right: 5px;
            color: $font-color-default;
          }

          .second-column {
            text-align: center;
            font-size: 2.5rem;
            color: $font-color-highlight;
          }

          .third-column {
            text-align: left;
            padding-top: 3px;
            padding-left: 5px;
            color: $font-color-default;
          }
        }
      }
    }

    .separator {
      align-self: center;
      width: 90%;
      height: 2px; /* ou qualquer outra espessura que você prefira */
      background-color: #8a8a8a; /* ou qualquer outra cor que você prefira */
    }

    .plans-second-row {
      display: flex;
      justify-content: space-between;

      .plans-columns-left {
        text-align: left;
        margin: 0 0 6vh 5vw;
        padding: 10px;
        flex-grow: 1;
        width: 33%;
        color: $font-color-default;
        line-height: 20px;

        b {
          font-weight: 700;
        }
      }

      .plans-columns-center {
        margin: 0 5vw 10vh 5vw;
        padding: 10px;
        flex-grow: 1;
        width: 33%;
      }

      .plans-columns-right {
        margin: 0 5vw 10vh 0;
        padding: 10px;
        flex-grow: 1;
        width: 33%;

        .plans-button {
          padding: 2.5vh 3vw;
          background: $background-button;
          color: white;
          text-align: center;
          font-size: 1.6rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          border-radius: 2rem;

          a {
            color: white;
          }
        }
      }
    }
  }
}

// Estilos responsivos para telas menores (smartphones)
@media only screen and (max-width: 600px) {
  .thirdSection-container {
    height: auto; // Ajuste a altura para auto
    padding: 2vh 5vw; // Adicione algum preenchimento para não ficar muito apertado

    .plans-container {
      height: 100vh;
      width: 100%; // Use toda a largura disponível
    }

    .offers-container {

      .titleContentSpan {
        font-size: 1rem;
      }
    }

    .plans-container {
      .plans-row,
      .plans-second-row {
        flex-direction: column; // Empilhe os elementos verticalmente
        align-items: center; // Centralize os itens

        .plans-columns-left,
        .plans-columns-center,
        .plans-columns-right {
          width: 100%; // Faça cada coluna ocupar a largura total
          margin: 2vh 0; // Ajuste a margem para um espaçamento vertical
          text-align: center; // Centralize o texto

          .row {
            flex-direction: row; // Mantenha os itens da linha em uma linha
            justify-content: center; // Centralize os itens da linha
          }
        }
      }
    }
  }
}

</style>