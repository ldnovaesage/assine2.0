<script>
import { vMaska } from "maska";

export default {
  directives: { maska: vMaska },
  data() {
    return {
      maskOptions: {
        mask: "(##) #####-####",
        eager: true,
      },
      buttons: {
        btn1: {
          marginTop: "45vh ",
          marginRight: "40vw",
          width: "22%",
          height: "20%",
          fontWeight: "600",
        },
      },
      optionsList: [
        { label: "Arapoanga", value: "Arapoanga" },
        { label: "Arniqueira", value: "Arniqueira" },
        { label: "Brazlândia", value: "Brazlandia" },
        { label: "Candangolândia", value: "Candangolandia" },
        { label: "Ceilândia", value: "Ceilandia" },
        { label: "Cruzeiro", value: "Cruzeiro" },
        { label: "Cruzeiro Velho", value: "CruzeiroVelho" },
        { label: "Gama", value: "Gama" },
        { label: "Guará", value: "Guara" },
        { label: "Itapoã", value: "Itapoa" },
        { label: "Jardim Botânico", value: "JardimBotanico" },
        { label: "Lago Norte", value: "LagoNorte" },
        { label: "Lago Sul", value: "LagoSul" },
        { label: "Noroeste", value: "Noroeste" },
        { label: "Núcleo Bandeirante", value: "NucleoBandeirante" },
        { label: "Paranoá", value: "Paranoa" },
        { label: "Park Way", value: "ParkWay" },
        { label: "Planaltina", value: "Planaltina" },
        { label: "Plano Piloto", value: "PlanoPiloto" },
        { label: "Polo de Modas Guará", value: "PolodeModas" },
        { label: "Pôr do Sol", value: "PorDoSol" },
        { label: "Recanto das Emas", value: "RecantodasEmas" },
        { label: "Riacho Fundo I", value: "RiachoFundo1" },
        { label: "Riacho Fundo II", value: "RiachoFundo2" },
        { label: "SAAN", value: "SAAN" },
        { label: "Samambaia", value: "Samambaia" },
        { label: "Santa Maria", value: "SantaMaria" },
        { label: "São Sebastião", value: "SaoSebastiao" },
        { label: "SIA", value: "SIA" },
        { label: "Sobradinho I", value: "Sobradinho1" },
        { label: "Sobradinho II", value: "Sobradinho2" },
        { label: "SOF SUL", value: "SOFSUL" },
        { label: "Sol Nascente", value: "SolNascente" },
        { label: "Taguatinga", value: "Taguatinga" },
        { label: "Taquari", value: "Taquari" },
        { label: "Varjão", value: "Varjao" },
        { label: "Vicente Pires", value: "VicentePires" },
      ],
      selectedOption: "",
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
        parametro === "(e)RxptY<@ih~R_Mw_i,|7ptQ26|bdq:" ? googleURL : defaultURL;

      window.open(redirectTo, "_blank");
    },
  },
  mounted() {
    window.updateWhatsAppLinks();
  },
};
</script>

<template>
  <div class="div_home">
    <div class="div_homeContainer">
      <!-- <div class="div_homeTitle">
        <div>
          <img class="logo-home" src="https://assinenovo.s3.sa-east-1.amazonaws.com/assets/logoAgeTelecom.png"
            alt="logoAge" />
          <p>A <b>AGE TELECOM</b> CONECTA VOCÊ AO QUE MAIS IMPORTA!</p>
          <a class="whatsapp-link"
            href="https://api.whatsapp.com/send?phone=556140404040&text=Ol%C3%A1%21+Gostaria+de+contratar+os+planos+de+internet+fibra+da+Age"
            target="_blank">
            <div class="button_container">
              <button class="custom_button">Conheça nossos planos</button>
            </div>
          </a>
        </div>
        <div class="ballons-home">
          <img class="wifi" src="https://assinenovo.s3.sa-east-1.amazonaws.com/assets/wifi.png" alt="" />
          <img class="brasilia" src="https://assinenovo.s3.sa-east-1.amazonaws.com/assets/Brasilia.png" alt="" />
          <img class="ilimitado" src="https://assinenovo.s3.sa-east-1.amazonaws.com/assets/Ilimitado.png" alt="" />
          <img class="ra100" src="https://assinenovo.s3.sa-east-1.amazonaws.com/assets/RA100.png" alt="" />
        </div>
      </div> -->
    </div>
  </div>

  <div class="div_home-mobile">
    <div class="div_homeContainer">
      <!-- <div class="div_homeTitle">
        <img class="logo-home" src="https://assinenovo.s3.sa-east-1.amazonaws.com/assets/logoAgeTelecom.png"
          alt="logoAge" />
        <p>A <b>AGE TELECOM</b> CONECTA VOCÊ AO QUE MAIS IMPORTA!</p>
      </div>
      <div class="ballons-home">
        <img class="wifi" src="https://assinenovo.s3.sa-east-1.amazonaws.com/assets/wifi.png" alt="" />
        <img class="brasilia" src="https://assinenovo.s3.sa-east-1.amazonaws.com/assets/Brasilia.png" alt="" />
        <img class="ilimitado" src="https://assinenovo.s3.sa-east-1.amazonaws.com/assets/Ilimitado.png" alt="" />
        <img class="ra100" src="https://assinenovo.s3.sa-east-1.amazonaws.com/assets/RA100.png" alt="" />
      </div>
      <a href="https://www.agetelecom.com.br/pessoa-fisica" target="_blank">
        <div class="button_container">
          <button class="custom_button">Conheça nossos planos</button>
        </div>
      </a> -->
    </div>
  </div>

  <!-- Seção de Planos -->
  <main>
    <div>
      <div class="div_container">
        <div class="div_cardBlue">
          <div class="div_cards">
            <a class="whatsapp-link" style="text-decoration: none"
              href="https://api.whatsapp.com/send?phone=556140404040&text=Ol%C3%A1%21+Gostaria+de+contratar+os+planos+de+internet+fibra+da+Age">
              <div class="card">
                <div class="card_plan">
                  <h1>PLANO BASIC</h1>
                  <span><b>480</b>MB</span>
                  <p>Franquia ilimitada</p>
                  <p>Wi-fi de alta perfomance</p>
                  <p>instalação Grátis</p>
                </div>
                <div class="card_price">
                  <h2>Mensal</h2>
                  <span><b>R$</b>89,90*</span>
                  <p>CONSULTE CONDIÇÕES</p>
                  <button class="btn-card">ASSINE AGORA</button>
                </div>
              </div>
            </a>
            <a class="whatsapp-link" style="text-decoration: none"
              href="https://api.whatsapp.com/send?phone=556140404040&text=Ol%C3%A1%21+Gostaria+de+contratar+os+planos+de+internet+fibra+da+Age">
              <div class="card-basic">
                <div class="card_plan">
                  <h1>PLANO MEDIUM</h1>
                  <span><b>1GB</b></span>
                  <span>Clube Age</span>
                  <p>Franquia ilimitada</p>
                  <p>Wi-fi de alta perfomance</p>
                  <p>instalação Grátis</p>
                </div>
                <div class="card_price">
                  <h2>Mensal</h2>
                  <span><b>R$</b>99,90*</span>
                  <p>CONSULTE CONDIÇÕES</p>
                  <button class="btn-card">ASSINE AGORA</button>
                </div>
              </div>
            </a>
            <a href="https://api.whatsapp.com/send?phone=556140404040&text=Ol%C3%A1%21+Gostaria+de+contratar+os+planos+de+internet+fibra+da+Age"
              style="text-decoration: none">
              <div class="card">
                <div class="card_plan">
                  <h1>PLANO PRO</h1>
                  <span><b>1GB</b></span>
                  <span style="font-size: 1.4rem;">Clube Age + Deezer</span>
                  <p>Franquia ilimitada</p>
                  <p>Wi-fi de alta perfomance</p>
                  <p>instalação Grátis</p>
                </div>
                <div class="card_price">
                  <h2>Mensal</h2>
                  <span><b>R$</b>109,90*</span>
                  <p>CONSULTE CONDIÇÕES</p>
                  <button class="btn-card">ASSINE AGORA</button>
                </div>
              </div>
            </a>
          </div>
          <div class="div_cards-mobile">
           <a class="whatsapp-link" style="text-decoration: none"
              href="https://api.whatsapp.com/send?phone=556140404040&text=Ol%C3%A1%21+Gostaria+de+contratar+os+planos+de+internet+fibra+da+Age">
              <div class="card">
                <div class="card_plan">
                  <h1>PLANO BASIC</h1>
                  <span><b>480</b>MB</span>
                  <p>Franquia ilimitada</p>
                  <p>Wi-fi de alta perfomance</p>
                  <p>instalação Grátis</p>
                </div>
                <div class="card_price">
                  <h2>Mensal</h2>
                  <span><b>R$</b>89,90*</span>
                  <p>CONSULTE CONDIÇÕES</p>
                  <button class="btn-card">ASSINE AGORA</button>
                </div>
              </div>
            </a>
            <a class="whatsapp-link" style="text-decoration: none"
              href="https://api.whatsapp.com/send?phone=556140404040&text=Ol%C3%A1%21+Gostaria+de+contratar+os+planos+de+internet+fibra+da+Age">
              <div class="card-basic">
                <div class="card_plan">
                  <h1>PLANO MEDIUM</h1>
                  <span><b>1GB</b></span>
                  <span>Clube Age</span>
                  <p>Franquia ilimitada</p>
                  <p>Wi-fi de alta perfomance</p>
                  <p>instalação Grátis</p>
                </div>
                <div class="card_price">
                  <h2>Mensal</h2>
                  <span><b>R$</b>99,90*</span>
                  <p>CONSULTE CONDIÇÕES</p>
                  <button class="btn-card">ASSINE AGORA</button>
                </div>
              </div>
            </a>
            <a href="https://api.whatsapp.com/send?phone=556140404040&text=Ol%C3%A1%21+Gostaria+de+contratar+os+planos+de+internet+fibra+da+Age"
              style="text-decoration: none">
              <div class="card">
                <div class="card_plan">
                  <h1>PLANO PRO</h1>
                  <span><b>1GB</b></span>
                  <span style="font-size: 1.4rem;">Clube Age + Deezer</span>
                  <p>Franquia ilimitada</p>
                  <p>Wi-fi de alta perfomance</p>.
                  <p>instalação Grátis</p>
                </div>
                <div class="card_price">
                  <h2>Mensal</h2>
                  <span><b>R$</b>109,90*</span>
                  <p>CONSULTE CONDIÇÕES</p>
                  <button class="btn-card">ASSINE AGORA</button>
                </div>
              </div>
            </a>
          </div>
          <button class="btn_wantedPlan">
            <a class="whatsapp-link"
              href="https://api.whatsapp.com/send?phone=556140404040&text=Ol%C3%A1%21+Gostaria+de+contratar+os+planos+de+internet+fibra+da+Age">QUERO
              CONTRATAR</a>
          </button>
          <div>
            <div class="div_titleForm">
              <h1>CADASTRE-SE E RECEBA UMA OFERTA ESPECIAL!</h1>
              <h2>
                Fique por dentro de todas as ofertas e notícias da <b>AGE Telecom!</b>
              </h2>
              <h2>
                Aqui, você não perde nada: acompanhe os lançamentos da
                <b>HBO Max</b> tenha acesso e descontos em mais de 300 lojas parceiras e
                muito mais!
              </h2>
            </div>
            <div class="div_forms">
              <form action="#" class="div_formFlex" name="assine">
                <input type="text" placeholder="Seu nome" name="name" id="name" autocomplete="off" required />
                <input type="email" placeholder="Seu e-mail" name="email" id="email" autocomplete="off" required />
                <input type="text" placeholder="(DDD) N° de telefone" v-maska:[maskOptions] id="telefone"
                  name="telefone" autocomplete="off" required />
                <select class="form_select" v-model="selectedOption" id="selectOption" name="city" required>
                  <option value="" disabled selected>Selecione sua cidade</option>
                  <option v-for="option in optionsList" :key="option.value" :value="option.value">
                    {{ option.label }}
                  </option>
                </select>
                <button @click="redirectWhatsApp">RECEBER MINHA OFERTA!</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src="https://assinenovo.s3.sa-east-1.amazonaws.com/assets/bannerBeneficios.jpg" class="banner-beneficios"
      alt="Banner Beneficios" />
    <img src="https://assinenovo.s3.sa-east-1.amazonaws.com/assets/bannerBeneficiosMobile.png"
      class="banner-beneficios-mobile" alt="Banner Beneficios" />
    <!-- Rodapé -->
    <div class="div_special">
      <!-- Seção de Avaliações e Ajuda -->
      <div class="div_indicateContainer">
        <div class="div_indicate"></div>
      </div>
      <!-- Título de Avaliações -->
      <div class="div_titleAvaliation">
        <p>
          O QUE DIZEM NOSSOS<br />
          CLIENTES
        </p>
      </div>
      <!-- Avaliações de Clientes -->
      <div class="div_avaliation">
        <!-- Avaliação 1 -->
        <div class="div_cardAvaliation">
          <div class="user_Avaliation">
            <img src="https://assinenovo.s3.sa-east-1.amazonaws.com/assets/user_Avaliation1.png" alt="" />
            <div class="user_AvaliationTitle">
              <p><b>Aninha FR</b></p>
              <img src="https://assinenovo.s3.sa-east-1.amazonaws.com/assets/user_Avaliation.png" alt="" />
            </div>
          </div>
          <p>
            "Estou com ela a alguns dias até agora não tive nenhum problema! Aqui na
            ceilandia o sinal é ótimo ela é super rápida e o técnico e atende foram
            ótimos. Estou gostando!"
          </p>
        </div>
        <!-- Avaliação 2 -->
        <div class="div_cardAvaliation">
          <div class="user_Avaliation">
            <img src="https://assinenovo.s3.sa-east-1.amazonaws.com/assets/user_Avaliation2.png" alt="" />
            <div class="user_AvaliationTitle">
              <p><b>Celiane Rodrigues</b></p>
              <img src="https://assinenovo.s3.sa-east-1.amazonaws.com/assets/user_Avaliation.png" alt="" />
            </div>
          </div>
          <p>
            "Minha experiência com Age telecom é a melhor sem sombra de dúvidas, tenho ela
            já a 7 meses nunca tive grandes problemas igual eu tive com a oi, vivo obti,
            AGE SUPER supre nossas necessidades! Indico de olhos fechados."
          </p>
        </div>
        <!-- Avaliação 3 -->
        <div class="div_cardAvaliation">
          <div class="user_Avaliation">
            <img src="https://assinenovo.s3.sa-east-1.amazonaws.com/assets/user_Avaliation3.png" alt="" />
            <div class="user_AvaliationTitle">
              <p><b>Laiane Bertoldo</b></p>
              <img src="https://assinenovo.s3.sa-east-1.amazonaws.com/assets/user_Avaliation.png" alt="" />
            </div>
          </div>
          <p>"A melhor internet fibra óptica do mercado muito obrigada por tudo."</p>
        </div>
      </div>
    </div>
    <!-- Título de Ajuda -->
    <div class="div_titleAvaliation">
      <p>PRECISA DE AJUDA?</p>
    </div>
    <div class="div_help">
      <div class="btn_help">
        <a href="https://portal.agetelecom.com.br/auth/login" target="_blank">
          <img src="https://assinenovo.s3.sa-east-1.amazonaws.com/assets/btnFatura.png" alt="" />
          <p>
            2° VIA DA <br />
            FATURA
          </p>
        </a>
      </div>
      <div class="btn_help">
        <a class="whatsapp-link" href="https://api.whatsapp.com/send?phone=556140404040" target="_blank">
          <img src="https://assinenovo.s3.sa-east-1.amazonaws.com/assets/btnAtendimento.png" alt="" />
          <p>ATENDIMENTO</p>
        </a>
      </div>
      <div class="btn_help">
        <a class="whatsapp-link" href="https://api.whatsapp.com/send?phone=556140404040" target="_blank">
          <img src="https://assinenovo.s3.sa-east-1.amazonaws.com/assets/btnSuporte.png" alt="" />
          <p>SUPORTE<br />TÉCNICO</p>
        </a>
      </div>
      <div class="btn_help">
        <a class="whatsapp-link"
          href="https://api.whatsapp.com/send?phone=556140404040&text=Ol%C3%A1%21+Gostaria+de+contratar+os+planos+de+internet+fibra+da+Age"
          target="_blank">
          <img src="https://assinenovo.s3.sa-east-1.amazonaws.com/assets/btnVendas.png" alt="" />
          <p>VENDAS</p>
        </a>
      </div>
    </div>
    <div class="whatsapp-button">
      <a class="whatsapp-link"
        href="https://api.whatsapp.com/send?phone=556140404040&text=Ol%C3%A1%21+Gostaria+de+contratar+os+planos+de+internet+fibra+da+Age"
        target="_blank">
        <img src="https://assinenovo.s3.sa-east-1.amazonaws.com/assets/whatsapp-icon.webp" alt="WhatsApp" />
      </a>
    </div>
  </main>
  <!-- Conteúdo do rodapé -->
  <footer class="div_footer">
    <div class="div_firstColumn">
      <div class="div_firstItem">
        <a href="https://www.agetelecom.com.br/">
          <img src="https://assinenovo.s3.sa-east-1.amazonaws.com/assets/AgeLogoFooter.png" alt="" />
        </a>
      </div>
      <div class="div_secondItem">
        <h1>FALE CONOSCO</h1>
        <p>0800 2020 777</p>
      </div>
      <div class="div_thirdItem">
        <h1>HORÁRIO DE FUNCIONAMENTO</h1>
        <p>SEGUNDA À SEXTA DE 08H:00H ÀS 22:00H</p>
        <p>SÁBADO DE 08:00H ÀS 12:00H</p>
      </div>
    </div>
    <div class="div_secondColumn">
      <p>
        Permanência mínima de 12 meses. Multa de infidelidade de R$ 950,00 (pro rata),
        podendo também ser adquirido sem permancência mínima nos termos do regulamento.
        Pagamento em débito em conta disponível nos bancos Santander e Caixa Econômica
        Federal. Para correntistas dos demais bancos, os meios de pagamento disponíveis
        são apenas boleto e cartão de crédito (bandeiras Mastercards, Visa, Cielo,
        American Express, Elo, Diners Club, Agiplan, Banes Card, Hipercard, JCB, Credz).
        Sem taxa de instalação. Equipamentos em locação. Não é possível realizar downgrade
        nos 3 primeiros meses. Consulte disponibilidade dos serviços, valores, regulamento
        de ofertas, contrato de permanência e mais informações em:
        https://www.agetelecom.com.br
      </p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.div_home {
  display: flex;
  position: relative;
  text-align: center;
  width: 100vw;
  height: 85vh;
  background: url("/src/assets/AgeFibraLP2.png") center/cover no-repeat;
}

.div_home-mobile {
  display: none;
}

.banner-beneficios-mobile {
  display: none;
}

.div_homeContainer {
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  color: #ffffff;
  margin-left: 25vw;
}

.div_container {
  margin-top: 5vh;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: row;
}

.div_homeTitle {
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: row;
  margin-top: 5vh;
  width: 90%;
  text-align: left;
  font-size: 2.5rem;
  cursor: default;

  div {
    p {
      width: 70%;
    }
  }

  .logo-home {
    width: 50%;
    height: auto;
    margin-bottom: 2vh;
  }
}

.ballons-home {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 2vh;
  cursor: default;

  .wifi {
    width: 30%;
    height: auto;
    animation: balaoFlutuante4 3s ease-in-out infinite;
  }

  .brasilia {
    width: 35%;
    height: auto;
    animation: balaoFlutuante2 3s ease-in-out infinite;
  }

  .ilimitado {
    margin-top: 20vh;
    width: 40%;
    height: auto;
    animation: balaoFlutuante1 2s ease-in-out infinite;
  }

  .ra100 {
    margin-top: 10vh;
    width: 35%;
    height: auto;
    animation: balaoFlutuante3 4s ease-in-out infinite;
  }
}

@keyframes balaoFlutuante1 {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-5px);
  }

  100% {
    transform: translateY(0);
  }
}

@keyframes balaoFlutuante2 {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0);
  }
}

@keyframes balaoFlutuante3 {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-8px);
  }

  100% {
    transform: translateY(0);
  }
}

@keyframes balaoFlutuante4 {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0);
  }
}

.tooltip {
  display: none;
  position: absolute;
  left: 55%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  width: 200px;
  text-align: center;
}

.div_homeTitle:hover+.tooltip {
  display: block;
}

.custom_button {
  padding: 12px 36px;
  margin-top: 2vh;
  border-radius: 4vh;
  font-size: 0.5em;
  font-weight: 500;
  color: white;
  font-family: "Montserrat", sans-serif;
  border: none;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 10px;

  /* Gradiente no estado normal */
  background-image: linear-gradient(to bottom, #2933ff, #0008b2);
  background-size: 100% 200%;
  background-position: center top;
  transition: background-position 0.3s ease;
}

.custom_button:hover {
  /* Gradiente e animação no estado de hover */
  background-position: center bottom;
  background-image: linear-gradient(to bottom, #2933ff, #0008b2);
}

.div_cardBlue {
  height: 108em;
  width: 80em;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  background-color: #000187;
  border-radius: 6vw;
}

.div_cards {
  margin-top: 4vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
}

.div_special {
  background-color: #ffffff;
  margin-top: 12vh;
}

.div_cards-mobile {
  display: none;
}

.card-basic {
  background-color: #001d86;
  color: white;
  border-radius: 1vw;
  width: 320px;
  height: 540px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 6px 10px;
  margin: 2.5vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 3px solid #ffffff;
  min-width: 280px;
  transition: 0.3s ease-in-out;

  .btn-card {
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 500;
    margin-top: 2vh;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    width: 90%;
    padding: 10px 0 10px 0;
    border-radius: 25px;
    border: none;
    color: #ffffff;
    background: linear-gradient(to bottom, #e97324, #e78e28);
  }

  .btn-card:hover {
    /* Gradiente e animação no estado de hover */
    background-position: center bottom;
    background: linear-gradient(to bottom, #e97324, #fdc008);
  }

  .card_plan {
    width: 100%;
    height: 55%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom, #163fd1, #001d86);
    border-radius: 1vw 1vw 0 0;
    cursor: pointer;

    p {
      font-size: 1.1rem;
      font-weight: 400;
    }

    h1 {
      height: 55px;
      width: 290px;
      font-size: 1.3em;
      font-weight: 700;
      text-align: center;
      color: #ffffff;
      padding: 15px 0 15px 0;
      background: linear-gradient(to right, #163fd1, #001d86);
      box-shadow: 0px 20px 10px rgba(0, 0, 0, 0.2);
      border-radius: 1vh;
    }

    span {
      font-size: 2.3em;
      font-weight: 800;

      b {
        font-size: 2.7em;
        font-weight: 800;
      }
    }
  }

  .card_price {
    width: 100%;
    height: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    cursor: pointer;
    border-top: 3px solid #ffffff;
    flex-wrap: wrap;

    h2 {
      font-weight: 400;
      font-size: 1.6rem;
    }

    span {
      font-size: 4.5rem;
      font-weight: 800;

      b {
        font-size: 1.7rem;
        font-weight: 400;
      }
    }
  }
}

.card-basic:hover {
  transform: scale(1.1);
  transition: 0.4s;
}

.card {
  background-color: #e97324;
  color: white;
  border-radius: 1vw;
  width: 280px;
  height: 460px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 6px 10px;
  margin-top: 10vh;
  margin-left: 2.5vh;
  margin-right: 2.5vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 3px solid #fdc008;
  min-width: 280px;
  transition: 0.3s ease-in-out;

  .btn-card {
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 500;
    margin-top: 2vh;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    width: 90%;
    padding: 10px 0 10px 0;
    border-radius: 25px;
    border: none;
    color: #ffffff;
    background-image: linear-gradient(to bottom, #2933ff, #0008b2);
  }

  .btn-card:hover {
    /* Gradiente e animação no estado de hover */
    background-position: center bottom;
    background-image: linear-gradient(to top, #2933ff, #0008b2);
  }

  .card_plan {
    width: 100%;
    height: 55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom, #e97324, #e78e28);
    border-radius: 1vw 1vw 0 0;
    cursor: pointer;

    h1 {
      width: 250px;
      font-size: 1.1em;
      font-weight: 700;
      text-align: center;
      color: #ffffff;
      padding: 15px 0 15px 0;
      background: linear-gradient(to right, #e97324, #fdc008);
      box-shadow: 0px 20px 10px rgba(0, 0, 0, 0.2);
      border-radius: 1vh;
    }

    span {
      font-size: 2em;
      font-weight: 800;

      b {
        font-size: 2.5em;
        font-weight: 800;
      }
    }
  }

  .card_price {
    width: 100%;
    height: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    cursor: pointer;
    flex-wrap: wrap;

    h2 {
      font-weight: 400;
      font-size: 1.5rem;
    }

    span {
      font-size: 3.5rem;
      font-weight: 800;

      b {
        font-size: 1.5rem;
        font-weight: 400;
      }
    }
  }
}

.card:hover {
  transform: scale(1.1);
  transition: 0.5s;
}

.btn_wantedPlan {
  font-size: 1.6rem;
  width: 400px;
  height: 70px;
  color: #ffffff;
  padding: 15px 0 15px 0;
  box-shadow: 0px 20px 10px rgba(0, 0, 0, 0.2);
  margin-top: 5vh;
  border-radius: 1vh;
  cursor: pointer;
  border: none;
  /* Gradiente no estado normal */
  background: linear-gradient(to bottom, #e97324, #fdc008);
  background-size: 100% 200%;
  background-position: center top;
  transition: background-position 1s ease;

  a {
    text-decoration: none;
    color: #ffffff;
  }
}

.btn_wantedPlan:hover {
  /* Gradiente e animação no estado de hover */
  background-position: center bottom;
  background: linear-gradient(to bottom, #e97324, #fdc008);
}

.div_titleForm {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2vh;

  h1 {
    width: 60%;
    font-size: 3.5rem;
    font-weight: 800;
    text-align: center;
    color: #ffffff;
    padding: 10vh 0 0 0;
  }

  h2 {
    width: 70%;
    font-size: 1.5rem;
    font-weight: 400;
    text-align: center;
    color: #ffffff;
    padding: 2vh 0 0 0;
  }
}

.div_forms {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 5vh;
}

.div_formFlex {
  width: 1000px;
  height: 500px;
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2em;

  input {
    width: 90%;
    height: 13%;
    margin: 2vh 0 2vh 0;
    border-radius: 4vh;
    border: none;
    padding: 0 0 0 2vw;
    font-size: 1.2rem;
    font-weight: 500;
    color: #000000;
    font-family: "Montserrat", sans-serif;
  }

  button {
    padding: 0.8vw 1.6vw;
    border-radius: 6vh;
    font-size: 1.3rem;
    font-weight: 600;
    color: white;
    font-family: "Montserrat", sans-serif;
    border: none;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 10px;

    /* Gradiente no estado normal */
    background-image: linear-gradient(to bottom, #2933ff, #0008b2);
    background-size: 100% 200%;
    background-position: center top;
    transition: background-position 0.3s ease;
  }

  button:hover {
    /* Gradiente e animação no estado de hover */
    background-position: center bottom;
    background-image: linear-gradient(to bottom, #2933ff, #0008b2);
  }

  .form_select {
    width: 90%;
    height: 13%;
    margin: 2vh 0 2vh 0;
    border-radius: 4vh;
    border: none;
    padding: 0 0 0 2vw;
    font-size: 1.2rem;
    font-weight: 500;
    color: #000000;
    font-family: "Montserrat", sans-serif;
  }

  .form_select option {
    padding: 16px;
    color: #333;
    font-family: "Montserrat", sans-serif;
  }
}

.div_indicateContainer {
  position: relative;
  text-align: center;
  width: 100vw;
  height: 80vh;
  background: url("https://assinenovo.s3.sa-east-1.amazonaws.com/assets/bannerIndiqueGanhe.jpg") center/cover no-repeat;
}

.div_avaliation {
  padding: 5vh 0 0 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.div_titleAvaliation {
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  color: #ff7200;
  padding: 10vh 0 0 0;
}

.user_Avaliation {
  height: 30%;
  width: 100%;
  display: flex;
  justify-content: start;
  align-content: start;
}

.div_cardAvaliation {
  background-color: #fff;
  border-radius: 2vw;
  width: 20%;
  height: 300px;
  padding: 4vh 4vh 0 4vh;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 10px;
  margin: 2.5vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  p {
    font-size: 0.8rem;
    text-align: left;
    padding: 15px 0 0 10px;
  }

  .user_AvaliationTitle {
    img {
      height: 35%;
      padding: 5px 0 0 5px;
    }
  }
}

.whatsapp-button {
  position: fixed;
  bottom: 20px;
  /* Distância a partir do fundo da página */
  right: 20px;
  /* Distância a partir do lado direito da página */
  z-index: 9999;
  /* Certifique-se de que o botão esteja acima de outros elementos */
  transition: 0.3s ease-in-out;
}

.whatsapp-button:hover {
  transform: scale(1.2);
  transition: 0.3s ease-in-out;
}

.whatsapp-button img {
  width: 60px;
  /* Ajuste o tamanho da imagem conforme necessário */
}

.div_help {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  margin: 5vw;
  cursor: pointer;

  p {
    margin-top: 2vh;
    font-weight: 700;
    color: #0008b2;
  }

  .btn_help {
    margin-left: 3vw;
    transform: scale(1);
    transition: 0.5s;
  }

  a {
    text-decoration: none;
    color: #0008b2;
  }
}

.btn_help:hover {
  transform: scale(1.2);
  transition: 0.5s;
}

.div_footer {
  background-color: #0008b2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3vh;

  .div_firstColumn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;

    .div_firstItem {
      width: 33%;

      img {
        width: 33%;
        height: auto;
      }
    }

    .div_secondItem {
      margin-right: 7vw;
      margin-top: 2vh;
    }

    .div_thirdItem {
      text-align: right;
      margin-top: 2vh;
    }
  }

  .div_secondColumn {
    margin-top: 6vh;
    font-size: 0.6rem;
    width: 70%;
  }

  h1 {
    font-size: 1rem;
    color: #ff7200;
  }

  p {
    color: #ffffff;
  }
}

@media (max-width: 767px) {
  .div_home-mobile {
    display: flex;
    position: relative;
    text-align: center;
    width: 100vw;
    height: 88vh;
    background: url("/src/assets/AgeFibraMobile2.png") center/cover no-repeat;
  }

  .div_home {
    display: none;
  }

  .div_homeContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    color: #ffffff;
    margin-left: 0;
  }

  .div_homeTitle {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 3vh;
    width: 85%;
    text-align: center;
    font-size: 2rem;
    cursor: pointer;

    .logo-home {
      display: none;
    }
  }

  .ballons-home {
    margin-bottom: 15vh;

    .wifi {
      height: auto;
      width: 40%;
      margin-left: 5vw;
      animation: balaoFlutuante1 4s ease-in-out infinite;
    }

    .brasilia {
      height: auto;
      width: 45%;
      margin-top: 25vh;
      animation: balaoFlutuante2 2s ease-in-out infinite;
    }

    .ilimitado {
      height: auto;
      width: 50%;
      margin-top: 2vh;
      animation: balaoFlutuante3 2s ease-in-out infinite;
    }

    .ra100 {
      height: auto;
      width: 40%;
      margin-top: 7vh;
      animation: balaoFlutuante4 3s ease-in-out infinite;
    }
  }

  @keyframes balaoFlutuante1 {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-5px);
    }

    100% {
      transform: translateY(0);
    }
  }

  @keyframes balaoFlutuante2 {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-10px);
    }

    100% {
      transform: translateY(0);
    }
  }

  @keyframes balaoFlutuante3 {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-8px);
    }

    100% {
      transform: translateY(0);
    }
  }

  @keyframes balaoFlutuante4 {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-10px);
    }

    100% {
      transform: translateY(0);
    }
  }

  .button_container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    cursor: pointer;
    margin-bottom: 4vh;
  }

  .custom_button {
    position: absolute;
    margin-bottom: 8vh;
    padding: 12px 36px;
    border-radius: 2vh;
    font-size: 1em;
    font-weight: 500;
    color: white;
    font-family: "Montserrat", sans-serif;
    border: none;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 10px;

    /* Gradiente no estado normal */
    background-image: linear-gradient(to bottom, #2933ff, #0008b2);
    background-size: 100% 200%;
    background-position: center top;
    transition: background-position 0.3s ease;
  }

  .banner-beneficios {
    display: none;
  }

  .banner-beneficios-mobile {
    display: flex;
    position: relative;
    text-align: center;
    width: 100vw;
    height: 60vh;
    background: url("https://assinenovo.s3.sa-east-1.amazonaws.com/assets/bannerBeneficiosMobile.png") center/cover no-repeat;
  }

  .div_cards {
    display: none;
  }

  .div_cards-mobile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .div_cardBlue {
    height: 100%;
    width: 95%;
    border-radius: 10px;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    background-color: #000187;
  }

  .card {
    margin-top: 4vh;
  }

  .btn-card {
    font-size: 1.2rem;
    font-weight: 500;
    margin-top: 2vh;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    width: 90%;
    padding: 10px 0 10px 0;
    border-radius: 25px;
    border: none;
    color: #ffffff;
    background-image: linear-gradient(to left, #2933ff, #0008b2);
  }

  .card-basic {
    margin-top: 5vh;
  }

  .btn_wantedPlan {
    display: none;
  }

  .div_titleForm {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      width: 80%;
      font-size: 1.4rem;
      font-weight: 800;
      text-align: center;
      color: #ffffff;
      padding: 4vh 0 0 0;
    }

    h2 {
      width: 80%;
      font-size: 0.9rem;
      font-weight: 400;
      text-align: center;
      color: #ffffff;
      padding: 2vh 0 0 0;
    }
  }

  .div_formFlex {
    width: 90%;
    height: 90%;

    input {
      font-size: 1rem;
      padding: 2vh;
      margin: 2vh 0 0 0;
    }

    .form_select {
      font-size: 1rem;
      padding: 2vh;
      margin: 2vh 0 0 0;
      background-color: #ffffff;
    }

    button {
      margin-top: 2vh;
      margin-bottom: 2vh;
      padding: 2vh 4vh;
      font-size: 1rem;
      font-weight: 600;
      color: white;
      font-family: "Montserrat", sans-serif;
      border: none;
      cursor: pointer;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 10px;
    }
  }

  .div_container {
    height: 275vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .div_special {
    margin-top: 4vh;
  }

  .div_indicateContainer {
    position: relative;
    text-align: center;
    width: 100vw;
    height: 100vh;
    background: url("https://assinenovo.s3.sa-east-1.amazonaws.com/assets/bannerIndiqueGanheMobile.png") center/cover no-repeat;
  }

  .div_avaliation {
    width: 100%;
    padding: 5vh 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .div_cardAvaliation {
      width: 90%;
      margin: 2vh 0 2vh 0;

      p {
        text-align: center;
      }
    }
  }

  .div_titleAvaliation {
    font-size: 1.6rem;
  }

  .div_help {
    display: flex;
    justify-content: space-around;
    align-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0;

    .btn_help {
      width: 40%;
      margin: 2vh 3vw 2vh 2vw;

      img {
        height: 65%;
      }
    }
  }

  .div_footer {
    .div_secondColumn {
      margin-top: 2vh;

      p {
        font-size: 0.3rem;
      }
    }

    .div_firstColumn {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-content: center;
      text-align: center;
      flex-wrap: wrap;

      .div_firstItem {
        width: 100%;

        img {
          width: 40%;
          height: auto;
        }
      }

      .div_secondItem {
        width: 35%;
        font-size: 0.8rem;
        margin-top: 2vh;
        margin-bottom: 2vh;

        h1 {
          font-size: 0.8rem;
        }
      }

      .div_thirdItem {
        width: 54%;
        font-size: 0.5rem;
        text-align: right;
        margin-top: 2vh;

        h1 {
          font-size: 0.6rem;
        }
      }
    }
  }
}

@media (min-width: 767px) {
  .div_cardAvaliation {
    .user_Avaliation {
      height: 20%;
      width: 100%;
      display: flex;
      justify-content: start;
      align-content: start;
    }

    .user_AvaliationTitle {
      img {
        height: 40%;
        padding: 5px 0 0 5px;
      }
    }

    p {
      font-size: 0.7em;
    }
  }
}
</style>
