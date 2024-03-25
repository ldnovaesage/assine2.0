<script>
export default {
  props: {
    text: String,
    fontWeight: String,
    marginTop: String,
    marginLeft: String,
    marginBottom: String,
    marginRight: String,
    width: String,
    height: String,
    btnProps: {
      required: true
    }
  },
  computed: {
    buttonText() {
      return this.text || "Clique aqui";
    },
    buttonStyles() {
      return {
        marginTop: this.marginTop || "0",
        marginLeft: this.marginLeft || "0",
        marginBottom: this.marginBottom || "0",
        marginRight: this.marginRight || "0",
        width: this.width || "0",
        height: this.height || "0",
        fontWeight: this.fontWeight || "500"
      }
    }
  }
};
</script>

<template>
    <div class="button_container">
        <button class="custom_button" :style="btnProps">{{ buttonText }}</button>
    </div>
</template>

<style scoped lang="scss">
.custom_button {
    padding: 12px 36px;
    border-radius: 4vh;
    font-size: 1.2em;
    font-weight: 500;
    color: white;
    font-family: 'Montserrat', sans-serif;
    border: none;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 10px;

    /* Gradiente no estado normal */
    background-image: linear-gradient(to bottom, #2933FF, #0008B2);
    background-size: 100% 200%;
    background-position: center top;
    transition: background-position 0.3s ease;
}

.custom_button:hover {
    /* Gradiente e animação no estado de hover */
    background-position: center bottom;
    background-image: linear-gradient(to bottom, #2933FF, #0008B2);
}
</style>