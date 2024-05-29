<template>
  <div class="section-container">
    <div class="principal-container">
      <div class="principal-content">
        <span class="firstContentSpan" v-html="principal[0]"></span>
        <br />
        <span class="secondContentSpan" v-html="principal[1]"></span>
        <br />
        <span class="thirdContentSpan" v-html="principal[2]"></span>
        <CountDown />
        <img src="https://assinenovo.s3.sa-east-1.amazonaws.com/assets/blackNovember/BlackFriday-Selo.png"
          class="overlay-image" alt="Imagem Promocional" />
        <a target="_blank" class="whatsapp-link" style="text-decoration: none"
          href="https://api.whatsapp.com/send?phone=556140404040&text=Ol%C3%A1%21+Gostaria+de+conhecer+os+planos+de+internet+Black+November+Age">
          <div class="principal-button">Conhecer Black age</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import CountDown from "@/components/sectionOne/countDown.vue";

export default {
  name: "FirstContent",
  components: {
    CountDown
  },
  data() {
    return {
      principal: [
        "Black Age",
        "Sua <b>oportunidade</b> de<br>contratar a <b>Internet Fibra</b><br><b>que mais cresce no DF</b>",
        "Corra que o tempo está acabando!"
      ]
    };
  },
  methods: {
    redirectWhatsApp() {
      const defaultURL =
        "https://api.whatsapp.com/send?phone=556140404040&text=Ol%C3%A1%21+Gostaria+de+contratar+os+planos+de+internet+fibra+da+Age";
      const googleURL = "https://me-qr.com/RImUYefA";

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
    window.updateWhatsAppLinks();
  }
};
</script>

<style lang="scss">
// Variáveis
$background-page: #17191a;
$background-container: linear-gradient(to bottom, #3f4345, #272a2c);
$background-button: linear-gradient(to right, #facc22, #f83600);
$font-weight-semi-bold: 500;
$font-weight-black: 900;
$font-color-default: #ffffff;
$font-color-highlight: #fcc10a;
$font-family-default: "Montserrat", sans-serif;

// Mixins
@mixin flex-display($justify: center, $align: center) {
  display: flex;
  justify-content: $justify;
  align-items: $align;
}

@mixin font-styling($size,
  $color: $font-color-default,
  $weight: $font-weight-semi-bold) {
  font-size: $size;
  color: $color;
  font-weight: $weight;
}

@mixin absolute-center($positionX: left,
  $positionY: bottom,
  $offsetX: 50%,
  $offsetY: -3%) {
  position: absolute;
  #{$positionX}: $offsetX;
  #{$positionY}: $offsetY;
  transform: translateX(-50%);
}

// Estilo do Container Principal
.section-container {
  @include flex-display;
  height: 80vh;
  background-color: $background-page;

  .principal-container {
    @include flex-display(flex-start);
    background: $background-container;
    width: 60%;
    height: 80%;
    border-radius: 3rem;
    position: relative;
    overflow: visible;

    .overlay-image {
      @include absolute-center(right, top, -40%, -10%);
      width: 50%;
      z-index: 10;
    }

    .principal-content {
      margin-left: 5vw;
      text-align: left;

      .firstContentSpan {
        @include font-styling(1.4rem);
      }

      .secondContentSpan {
        @include font-styling(2.3rem, $font-color-highlight, 500);

        b {
          font-family: $font-family-default;
          font-weight: $font-weight-black;
        }
      }

      .thirdContentSpan {
        @include font-styling(1.4rem);
      }
    }

    .principal-button {
      @include absolute-center($offsetY: -5%);
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

// Media Queries para Responsividade
@media only screen and (min-width: 361px) and (max-width: 600px) {
  .section-container .principal-container {
    width: 80%;
    height: 70vh;
    border-radius: 1rem;
    margin: 10vh 0;
  }

  .section-container .principal-container .overlay-image {
    @include absolute-center(right, top, -30%, -5%);
    width: 80%;
    z-index: 10;
  }

  .section-container .principal-container .principal-content {
    margin-top: 20vh;
    margin-left: 0vw;
    text-align: center;
  }

  .section-container .principal-container .principal-content .firstContentSpan {
    @include font-styling(1rem);
  }

  .section-container .principal-container .principal-content .secondContentSpan {
    @include font-styling(1.2rem, $font-color-highlight, 500);
  }

  .section-container .principal-container .principal-content .thirdContentSpan {
    @include font-styling(1rem);
  }

  .section-container .principal-container .principal-button {
    font-size: .8rem;
  }
}

@media only screen and (max-width: 360px) {
  .section-container .principal-container {
    width: 80%;
    height: 70vh;
    border-radius: 1rem;
    margin: 10vh 0;
  }

  .section-container .principal-container .overlay-image {
    @include absolute-center(right, top, -30%, -5%);
    width: 80%;
    z-index: 10;
  }

  .section-container .principal-container .principal-content {
    margin-top: 20vh;
    margin-left: 0vw;
    text-align: center;
  }

  .section-container .principal-container .principal-content .firstContentSpan {
    @include font-styling(1rem);
  }

  .section-container .principal-container .principal-content .secondContentSpan {
    @include font-styling(1.2rem, $font-color-highlight, 500);
  }

  .section-container .principal-container .principal-content .thirdContentSpan {
    @include font-styling(1rem);
  }

  .section-container .principal-container .principal-button {
    font-size: .8rem;
  }
}
</style>
