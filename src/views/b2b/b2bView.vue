<template>
  <div class="w-screen bg-white flex items-center justify-around font-poppins">
    <LogoNavBar />
    <RoofButton />
    <WantButton />
  </div>
  <div class="bg-slate-50">
    <HeroSection></HeroSection>
  </div>
  <div class="bg-slate-50">
    <PlanTitle />
  </div>
  <div class="bg-slate-50">
    <PlanSection />
  </div>
</template>

<script setup>
import LogoNavBar from "@/components/b2b/LogoNavBar.vue";
import RoofButton from "@/components/b2b/RoofButton.vue";
import HeroSection from "../../components/b2b/HeroSection.vue";
import WantButton from "@/components/b2b/WantButton.vue";
import PlanTitle from "@/components/b2b/PlanTitle.vue";
import PlanSection from "@/components/b2b/PlanSection.vue";
</script>

<style lang="scss" scoped></style>
