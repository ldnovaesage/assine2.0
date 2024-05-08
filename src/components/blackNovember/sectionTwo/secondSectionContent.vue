<script>
export default {
  name: "SecondContent",
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
  <div class="sectionTwo-container">
    <a
      target="_blank"
      href="https://api.whatsapp.com/send?phone=556140404040&text=Ol%C3%A1%21+Gostaria+de+conhecer+os+planos+de+internet+Black+November+Age"
    >
      <div class="banner-container">
        <img
          src="https://assinenovo.s3.sa-east-1.amazonaws.com/assets/blackNovember/Banner-LPNew.png"
          class="desktop-banner"
          alt="Banner para Desktop"
        />
        <img
          src="https://assinenovo.s3.sa-east-1.amazonaws.com/assets/blackNovember/Banner-LP-Mobile-New.png"
          class="mobile-banner"
          alt="Banner para Mobile"
        />
      </div>
    </a>
  </div>
</template>

<style lang="scss">
$background-page: #17191a;

.sectionTwo-container {
  background-color: $background-page;

  .banner-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  .mobile-banner {
    display: none;
  }
}

@media only screen and (max-width: 600px) {
  .desktop-banner {
    display: none; // Esconde a imagem para desktop em telas pequenas
  }
  .sectionTwo-container .mobile-banner {
    display: block; // Mostra a imagem para mobile em telas pequenas
  }
}
</style>