<script>
import CustomButton from './components/CustomButton.vue';
import 'animate.css';

export default {
  data() {
    return {
      action: {
        item: 1,
        class: 'right'
      },
      coberturaItems: [
        { label: 'Arapoanga', to: 'https://www.agetelecom.com.br/fibraoptica/arapoanga' },
        { label: 'Arniqueira', to: 'https://www.agetelecom.com.br/fibraoptica/arniqueiras' },
        { label: 'Brazlândia', to: 'https://www.agetelecom.com.br/fibraoptica/brazlandia' },
        { label: 'Candangolândia', to: 'https://www.agetelecom.com.br/fibraoptica/candangolandia' },
        { label: 'Ceilândia', to: 'https://www.agetelecom.com.br/fibraoptica/ceilandia' },
        { label: 'Cruzeiro', to: 'https://www.agetelecom.com.br/fibraoptica/cruzeiro' },
        { label: 'Cruzeiro Velho', to: 'https://www.agetelecom.com.br/fibraoptica/cruzeiro-velho' },
        { label: 'Gama', to: 'https://www.agetelecom.com.br/fibraoptica/gama' },
        { label: 'Guará', to: 'https://www.agetelecom.com.br/fibraoptica/guara' },
        { label: 'Itapoã', to: 'https://www.agetelecom.com.br/fibraoptica/itapoa' },
        { label: 'Jardim Botânico', to: 'https://www.agetelecom.com.br/fibraoptica/jardim-botanico' },
        { label: 'Lago Norte', to: 'https://www.agetelecom.com.br/fibraoptica/lago-norte' },
        { label: 'Lago Sul', to: 'https://www.agetelecom.com.br/fibraoptica/lago-sul' },
        { label: 'Noroeste', to: 'https://www.agetelecom.com.br/fibraoptica/noroeste' },
        { label: 'Núcleo Bandeirante', to: 'https://www.agetelecom.com.br/fibraoptica/nucleo-bandeirante' },
        { label: 'Paranoá', to: 'https://www.agetelecom.com.br/fibraoptica/paranoa' },
        { label: 'Park Way', to: 'https://www.agetelecom.com.br/fibraoptica/park-way' },
        { label: 'Planaltina', to: 'https://www.agetelecom.com.br/fibraoptica/planaltina' },
        { label: 'Plano Piloto', to: 'https://www.agetelecom.com.br/fibraoptica/plano-piloto' },
        { label: 'Polo de Modas Guará', to: 'https://www.agetelecom.com.br/fibraoptica/polo-de-modas' },
        { label: 'Pôr do Sol', to: 'https://www.agetelecom.com.br/fibraoptica/por-sol-' },
        { label: 'Recanto das Emas', to: 'https://www.agetelecom.com.br/fibraoptica/recanto-das-emas' },
        { label: 'Riacho Fundo I', to: 'https://www.agetelecom.com.br/fibraoptica/riacho-fundo-1' },
        { label: 'Riacho Fundo II', to: 'https://www.agetelecom.com.br/fibraoptica/riacho-fundo-2' },
        { label: 'SAAN', to: 'https://www.agetelecom.com.br/fibraoptica/saan' },
        { label: 'Samambaia', to: 'https://www.agetelecom.com.br/fibraoptica/samambaia' },
        { label: 'Santa Maria', to: 'https://www.agetelecom.com.br/fibraoptica/santa-maria' },
        { label: 'São Sebastião', to: 'https://www.agetelecom.com.br/fibraoptica/sao-sebastiao-' },
        { label: 'SIA', to: 'https://www.agetelecom.com.br/fibraoptica/sia' },
        { label: 'Sobradinho I', to: 'https://www.agetelecom.com.br/fibraoptica/sobradinho-' },
        { label: 'Sobradinho II', to: 'https://www.agetelecom.com.br/fibraoptica/sobradinho-ii' },
        { label: 'SOF SUL', to: 'https://www.agetelecom.com.br/fibraoptica/sof-sul' },
        { label: 'Sol Nascente', to: 'https://www.agetelecom.com.br/fibraoptica/sol-nascente' },
        { label: 'Taguatinga', to: 'https://www.agetelecom.com.br/fibraoptica/taguatinga' },
        { label: 'Taquari', to: 'https://www.agetelecom.com.br/fibraoptica/taquari' },
        { label: 'Varjão', to: 'https://www.agetelecom.com.br/fibraoptica/varjao' },
        { label: 'Vicente Pires', to: 'https://www.agetelecom.com.br/fibraoptica/vicente-pires' }
      ]
    }
  },
  methods: {
    setItem(item) {
      setTimeout(() => {
        this.action.item = item;
      }, 1000);
    }
  },
  computed: {
    // Computed property para verificar se a rota atual é '/blacknovember'
    isBlackNovember() {
      return this.$route.path === '/blacknovember';
    },
  },
  components: {CustomButton}
}

</script>


<template>
  <nav v-if="!isBlackNovember">
    <router-link to="/"><img src="../src/assets/logoAgeTelecom.png" alt="logoAge"></router-link>
    <div class="div_menu">

      <!-- Item de dropdown "COBERTURA" -->
      <div class="dropdown">
        <router-link to="/" @mouseover="setItem(2)"
                     :class="{ 'right': action.item === 3, 'left': action.item === 1 || action.item === 2 }">
          COBERTURA
        </router-link>
        <div class="dropdown-content">
          <!-- Divida os links em colunas a cada 10 itens -->
            <a target="_blank" v-for="(item, index) in coberturaItems" :key="index" :href="item.to">{{ item.label }} </a>
        </div>
      </div>

    </div>
    <a class="whatsapp-link" href="https://api.whatsapp.com/send?phone=556140404040&text=Ol%C3%A1%21+Gostaria+de+contratar+os+planos+de+internet+fibra+da+Age">
      <custom-button class="custom-button" text="QUERO CONTRATAR"/>
    </a>
  </nav>
  <router-view/>
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
  font-family: 'Montserrat', sans-serif;
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
  background: #F5F7FB;
  border-radius: 10px;
}

html::-webkit-scrollbar-thumb {
  background: #5F687A;
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
    color: #F5F7FB;
    text-decoration: none;

    background-image: linear-gradient(to bottom, #2933FF, #0008B2);
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
    background-image: linear-gradient(to bottom, #2933FF, #0008B2);
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
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
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
      border-bottom: 1px solid #FF9E23;
      margin: 0;
    }
  }

.dropdown-content a:hover {
    color: #FF9E23;
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
    padding: .5vh;
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
