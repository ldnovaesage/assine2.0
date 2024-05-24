<script>
import { vMaska } from "maska";
import CardOferta from "@/views/b2c/components/assineGanhe/CardOferta.vue";

export default {
  directives: { maska: vMaska },
  data() {
    return {
      maskOptions: {
        mask: "(##) #####-####",
        eager: true,
      },
    };
  },
  components: {
    CardOferta,
  },
};
</script>
<template>
  <div class="card-oferta"><CardOferta></CardOferta></div>
</template>

<style scoped lang="scss">
body {
  padding: 0;
  margin: 0;
}

.card-oferta {
  width: 100vw;
  min-height: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("../../../assets/cardOferta/bg-main.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.div_special {
  display: flex;
  flex-direction: column;
}

@media only screen and (max-width: 600px) {

  .card-oferta {
    height: 2000px;
    background-image: url("../../../assets/cardOferta/bg-main-mobile.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-top: -350px;
    margin-bottom: -360px;
  }
}
</style>
