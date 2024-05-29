<script>
import { globalData } from '@/store/globalData';

export default {
  props: ["nameValor", "idValor", "urlIcon"],
  data() {
    return {
      nameValue: this.nameValor,
      idValue: this.idValor,
      optionsList: globalData.optionsList,
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

@media only screen and (max-width: 1024px) {
  .custom-input {
    padding: 24px 40px;
    width: 80vw;
    font-size: 18px;
  }
}
</style>
