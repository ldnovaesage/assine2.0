<template>
  <div class="relative w-full h-full md:w-16" ref="dropdown">
    <div
      @click="toggleDropdown"
      class="h-full cursor-pointer flex items-center justify-center px-2 py-1 bg-white border border-age-business-blue-50 rounded-md rounded-r-none shadow focus:outline-none"
    >
      <div class="flex flex-row items-center justify-center h-full" v-if="selectedItem">
        <img
          :src="selectedItem.icon"
          :alt="selectedItem.label"
          class="h-8 w-8 "
        />

      </div>
      <div v-else class="text-gray-500"></div>
    </div>
    <div
      v-show="isOpen"
      class="absolute top-full left-0 w-full bg-white border border-age-business-blue-50 mt-1 rounded-md shadow z-50"
    >
      <div
        v-for="item in options"
        :key="item.id"
        @click="selectItem(item)"
        class="py-2 px-2 hover:bg-gray-100 cursor-pointer flex justify-center items-center"
      >
        <slot :item="item">
          <img :src="item.icon" :alt="item.label" class="h-8 w-8" />
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect, defineProps, defineEmits } from "vue";
import { onMounted, onUnmounted } from "vue";

const props = defineProps({
  options: Array,
  modelValue: Object,
});

const emit = defineEmits(["update:modelValue"]);

const isOpen = ref(false);
const selectedItem = ref(props.modelValue);

watchEffect(() => {
  selectedItem.value = props.modelValue;
});

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

function selectItem(item) {
  selectedItem.value = item;
  isOpen.value = false;
  emit("update:modelValue", item);
}

const dropdown = ref(null);

onMounted(() => {
  window.addEventListener("click", closeDropdownOnClickOutside);
});

onUnmounted(() => {
  window.removeEventListener("click", closeDropdownOnClickOutside);
});

function closeDropdownOnClickOutside(event) {
  const dropdownElement = dropdown.value;
  if (!dropdownElement.contains(event.target)) {
    isOpen.value = false;
  }
}
</script>

<style scoped></style>
