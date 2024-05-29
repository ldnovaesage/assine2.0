<script>
export default {
  name: "CountDown",
  data() {
    return {
      endDate: new Date("2023-11-26T23:59:59"), // Defina a data de fim aqui
      time: {
        totalHours: "00",
        minutes: "00",
        seconds: "00"
      },
      timerInterval: null
    };
  },
  mounted() {
    this.calculateTime();
    this.timerInterval = setInterval(this.calculateTime, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timerInterval);
  },
  methods: {
    calculateTime() {
      const now = new Date();
      const difference = this.endDate - now;

      if (difference <= 0) {
        this.time = { totalHours: "00", minutes: "00", seconds: "00" };
        clearInterval(this.timerInterval);
      } else {
        const totalHours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        this.time.totalHours = totalHours < 10 ? "0" + totalHours : totalHours.toString();
        this.time.minutes = minutes < 10 ? "0" + minutes : minutes.toString();
        this.time.seconds = seconds < 10 ? "0" + seconds : seconds.toString();
      }
    }
  },
  computed: {
    hourLabel() {
      return this.time.totalHours === "01" ? "HORA" : "HORAS";
    },
    minuteLabel() {
      return this.time.minutes === "01" ? "MINUTO" : "MINUTOS";
    },
    secondLabel() {
      return this.time.seconds === "01" ? "SEGUNDO" : "SEGUNDOS";
    }
  }
};
</script>

<template>
  <div class="timer-container">
    <div class="flex-timer-container">
      <div class="timer">
        <span class="time">{{ time.totalHours }}</span>
      </div>
      <span class="label">{{ hourLabel }}</span>
    </div>
    <div class="flex-timer-container">
      <div class="timer">
        <span class="time">{{ time.minutes }}</span>
      </div>
      <span class="label">{{ minuteLabel }}</span>
    </div>
    <div class="flex-timer-container">
      <div class="timer">
        <span class="time">{{ time.seconds }}</span>
      </div>
      <span class="label">{{ secondLabel }}</span>
    </div>
  </div>
</template>

<style scoped>
.timer-container {
  width: 42vw;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #fff;
  margin: 4vh 0;
  border-radius: 10px;
}

.flex-timer-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.timer {
  border: 2px solid #42484a;
  border-radius: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;
  width: 10vw;
  text-align: center;
  margin: 0 2vw;
  background-color: #121517;
}

.time {
  font-size: 5em;
  /* Ajuste o tamanho da fonte conforme necessário */
  margin: 0;
  color: #626b70;
  font-weight: 700;
}

.label {
  font-size: 1em;
  /* Ajuste o tamanho da fonte conforme necessário */
  margin: 2vh 0;
}

/* Media Queries para telas menores (até 600px) */
@media only screen and (max-width: 600px) {
  .timer-container {
    width: 100%;
    /* Use toda a largura disponível */
    flex-direction: row;
    /* Empilhe os temporizadores verticalmente */
    align-items: center;
    /* Centralize os itens */
    justify-content: center;
    /* Centralize ao longo do eixo principal */
  }

  .flex-timer-container {
    justify-content: center;
    width: 100%;
    /* Use toda a largura disponível */
    margin: 1vh 0;
    /* Ajuste a margem para espaçamento vertical */
  }

  .timer {
    border-radius: 1rem;
    height: 10vh;
    /* Ajuste a altura */
    width: 80%;
    /* Ajuste a largura */
    margin: 1vh auto;
    /* Centralize horizontalmente e ajuste a margem vertical */
  }

  .time {
    font-size: 2.5em;
    /* Ajuste o tamanho da fonte */
  }

  .label {
    font-size: 0.8em;
    /* Ajuste o tamanho da fonte para os rótulos */
    margin: 1vh 0;
  }
}

/* Media Queries para tablets ou telas de tamanho médio (601px a 1024px) */
@media only screen and (min-width: 601px) and (max-width: 1024px) {
  .timer-container {
    width: 80%;
    /* Ajuste a largura */
    flex-direction: row;
    /* Disponha os temporizadores horizontalmente */
    justify-content: center;
    /* Centralize ao longo do eixo principal */
  }

  .flex-timer-container {
    justify-content: center;
    width: 33%;
    /* Distribua o espaço igualmente */
  }

  .timer {
    height: 18vh;
    /* Ajuste a altura */
    width: 100%;
    /* Use toda a largura disponível */
    margin: 1vh auto;
    /* Centralize horizontalmente e ajuste a margem vertical */
  }

  .time {
    font-size: 4em;
    /* Ajuste o tamanho da fonte */
  }

  .label {
    font-size: 0.9em;
    /* Ajuste o tamanho da fonte para os rótulos */
    margin: 1vh 0;
  }
}
</style>
  