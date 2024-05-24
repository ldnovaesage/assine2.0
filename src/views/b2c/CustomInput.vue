<script>
export default {
  props: ["placeholderValor", "nameValor", "idValor", "urlIcon"],
  data() {
    return {
      placeholderValue: this.placeholderValor,
      nameValue: this.nameValor,
      idValue: this.idValor,
    };
  },
};
</script>

<template>
  <div class="input-with-icon">
    <img class="custom-icon" :src="urlIcon" alt="" />
    <input
      :name="nameValue"
      :id="idValue"
      type="text"
      class="custom-input placeholder-black bg-gray-50 text-black rounded-lg block w-full p-2.5"
      :placeholder="placeholderValue"
    />
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
