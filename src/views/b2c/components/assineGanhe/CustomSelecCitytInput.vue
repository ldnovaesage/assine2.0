<script>
export default {
  props: ["nameValor", "idValor", "urlIcon"],
  data() {
    return {
      nameValue: this.nameValor,
      idValue: this.idValor,
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
};
</script>

<template>
  <div class="input-with-icon">
    <img class="custom-icon" :src="urlIcon" alt="" />
    <select
      :name="nameValue"
      :id="idValue"
      class="custom-input placeholder-black bg-gray-50 text-black rounded-lg block w-full p-2.5"
      v-model="selectedOption"
      required
    >
    <option value="" disabled selected>Selecione sua cidade</option>
    <option
    v-for="option in optionsList"
    :key="option.value"
    :value="option.value"
    >
    {{ option.label }}
    </option>
    </select>
  </div>
</template>

<style scoped lang="scss">
.custom-input {
  padding: 16px 24px;
  border-radius: 30px;
  width: 100%;
  text-indent: 20px;
  font-size: 18px;
}

.input-with-icon {
  position: relative;
  width: 100%;
}

.input-with-icon input {
  padding-left: 30px;
}

.input-with-icon:before {
  content: "";
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
}

.custom-icon {
  content: "";
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  padding: 10px;
}

@media only screen and (max-width: 952px) {
  .custom-input {
    padding: 24px 40px;
    width: 80vw;
    font-size: 18px;
  }
}
</style>
