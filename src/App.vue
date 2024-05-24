<script>
import "animate.css";

export default {
  data() {
    return {
      
    };
  },
  methods: {
    
  },
  computed: {
    isBlackNovember() {
      return this.$route.path === "/blacknovember";
    },
  },
};
</script>

<template>
  <router-view />
</template>

<style lang="scss">
html {
  scroll-behavior: smooth;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow-y: hidden;
  overflow-x: hidden;
}

html::-webkit-scrollbar {
  width: 10px;
}

html::-webkit-scrollbar-track {
  background: #f5f7fb;
  border-radius: 10px;
}

html::-webkit-scrollbar-thumb {
  background: #5f687a;
  border-radius: 10px;
}

html::-webkit-scrollbar-thumb:hover {
  background: rgb(100, 100, 100);
  border-radius: 10px;
}

html::-webkit-scrollbar-thumb:active {
  background: rgb(68, 68, 68);
  border-radius: 10px;
}

nav {
  padding: 1vh;
  background-color: #ff7200;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  a.btnHire {
    font-weight: 700;
    padding: 0.8vw 1.6vw;
    border-radius: 3vh;
    color: #f5f7fb;
    text-decoration: none;

    background-image: linear-gradient(to bottom, #2933ff, #0008b2);
    background-size: 100% 200%;
    /* Duas vezes a altura para criar espaço para animação */
    background-position: center top;
    /* Posição inicial */
    transition: background-position 0.3s ease;
    /* Adicione uma transição para suavizar a animação */
  }

  a.btnHire:hover {
    background-position: center bottom;
    /* Deslocamento para animação ao passar o mouse */
    background-image: linear-gradient(to bottom, #2933ff, #0008b2);
  }

  .div_menu a {
    text-decoration: none;
    padding: 0 4vh 0 0;
    color: #fff;
    font-weight: 500;
    position: relative;
    margin-right: 10vw;

    &::before {
      content: "";
      position: absolute;
      bottom: -2px;
      /* Posição da linha */
      left: 0;
      width: 72%;
      /* Largura da linha igual ao tamanho do texto */
      height: 2px;
      background-color: #fff;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s ease;
    }
  }

  .div_menu .left {
    &:hover::before {
      transform: scaleX(1);
      transform-origin: left !important;
    }
  }

  .div_menu .right {
    &:hover::before {
      transform: scaleX(1);
      transform-origin: right !important;
    }
  }

  img {
    width: 50%;
    margin-right: 8vw;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    position: absolute;
    top: 3vh;
    left: -30vw;
    background-color: white;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    white-space: nowrap;
    flex-direction: row;
    flex-wrap: wrap;
    display: none;
    max-width: 80vw;
    width: 80vw;

    a {
      color: rgb(68, 68, 68);
      width: calc((100% / 5));
      height: 4vh;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid #ff9e23;
      margin: 0;
    }
  }

  .dropdown-content a:hover {
    color: #ff9e23;
    transition: 0.3s ease;
  }

  .dropdown:hover .dropdown-content {
    display: flex;
  }

  /* Limpe as flutuações após as colunas */
  .clearfix::after {
    content: "";
    display: table;
    clear: both;
  }
}

@media (max-width: 767px) {
  nav {
    padding: 0.5vh;
    background-color: #ff7200;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    .div_menu {
      display: none;
    }

    .custom-button {
      display: none;
    }
  }
}
</style>
