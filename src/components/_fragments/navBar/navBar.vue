<script>
export default {
  data() {
    return {
      links: [{ name: "Black", url: "/blacknovember" }],
      logos: [{ alt: "Logo Age Telecom" }]
    };
  },
  methods: {
    isActiveRoute(route) {
      return this.$route.path === route;
    }
  }
};
</script>
<template>
  <div class="nav-container">
    <div class="logo-container">
      <img v-for="logo in logos" :key="logo.src" src="https://assinenovo.s3.sa-east-1.amazonaws.com/assets/blackNovember/logoTeste.svg" :alt="logo.alt" />
    </div>
    <div class="navigation-container">
      <router-link
        v-for="link in links"
        :key="link.name"
        :to="link.url"
        :class="{ active: isActiveRoute(link.url) }"
      >{{ link.name }}</router-link>
      <a target="_blank"
        href="https://assinenovo.s3.sa-east-1.amazonaws.com/assets/blackNovember/REGULAMENTO+-+BLACK+FRIDAY+2023.pdf"
      >Termos & Condições</a>
    </div>
  </div>
</template>
<style lang="scss">
$background-nav: #17191a;
$active-link-color: #fff;
$active-link-font-weight: 600;

@mixin flex-center-horizontally {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-container {
  height: 10vh;
  @include flex-center-horizontally;
  background-color: $background-nav;

  .navigation-container {
    width: 50%;

    a {
      margin: 0 2vw;
      text-decoration: none;
      color: #ccc;

      &.active {
        color: $active-link-color;
        font-weight: $active-link-font-weight;
      }
    }
  }

  .logo-container {
    width: 13vw;
    max-width: 14vw;
  }
}

// Estilos responsivos para telas menores (smartphones)
@media only screen and (max-width: 600px) {
  .nav-container {
    flex-direction: column; // Empilhe os elementos verticalmente
    height: auto; // Altura automática para acomodar o conteúdo
    padding: 1vh 0; // Ajuste no preenchimento para telas pequenas

    .logo-container {
      width: 100%; // Use toda a largura disponível
      justify-content: center; // Centralize o logo
      margin-bottom: 2vh; // Espaçamento entre o logo e os links
    }

    .navigation-container {
      width: 100%; // Use toda a largura disponível
      flex-wrap: wrap; // Permita que os links sejam envoltos

      a {
        margin: 1vh 3vw; // Espaçamento vertical e centralização dos links
        font-size: 0.9em; // Tamanho da fonte menor para os links
      }
    }
  }
}
</style>