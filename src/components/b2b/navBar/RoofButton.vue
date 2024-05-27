<template>
  <div
    class="dropdown max-w-sm mx-auto rounded-md flex items-center space-x-4 border-2 border-solid text-age-business-blue-400 border-age-business-blue-100 cursor-pointer bg-gradient-to-l from-white to-white hover:to-age-business-blue-100 hover:from-age-business-blue-400 hover:text-white transition-colors duration-300 ease-in-out"
    @mouseover="showDropdown = true" @mouseleave="showDropdown = false"
    >
    <span class="drophover px-16 py-2">Cobertura</span>
    <div class="dropdown-content" v-if="showDropdown">
      <span v-for="(item, index) in regions" :key="index">{{ item.region }}</span>
    </div>
  </div>
</template>

<script>
import { globalData } from '@/store/globalData';

export default {
  data() {
    return {
      showDropdown: false,
      regions: globalData.regions
    }
  } 
}


</script>

<style lang="scss" scoped>
  .dropdown {
    position: relative;
    display: flex;
  }

  .dropdown-content {
    overflow-y: auto;
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    top: 0;
    height: 360px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    z-index: 1;
  }

  .dropdown-content span {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown-content::-webkit-scrollbar {
    display: none;
  }

  .dropdown-content span:hover {
    background-color: #f1f1f1;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }
</style>
