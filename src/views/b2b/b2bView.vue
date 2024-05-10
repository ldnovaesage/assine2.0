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
  <div>
    <BenefitSection />
  </div>
  <div>
    <SolutionSection />
  </div>
  <div>
    <PromotionSection />
  </div>
  <div>
    <FormSection />
  </div>
  <div>
    <ActingSection />
  </div>
  <div>
    <FooterSection />
  </div>
</template>

<script setup>
import LogoNavBar from "@/components/b2b/LogoNavBar.vue";
import RoofButton from "@/components/b2b/RoofButton.vue";
import HeroSection from "../../components/b2b/HeroSection.vue";
import WantButton from "@/components/b2b/WantButton.vue";
import PlanTitle from "@/components/b2b/PlanTitle.vue";
import PlanSection from "@/components/b2b/PlanSection.vue";
import FormSection from "@/components/b2b/FormSection.vue";
import BenefitSection from "@/components/b2b/BenefitSection.vue";
import SolutionSection from "@/components/b2b/SolutionSection.vue";
import PromotionSection from "@/components/b2b/PromotionSection.vue";
import ActingSection from "@/components/b2b/ActingSection.vue";
import FooterSection from "@/components/b2b/FooterSection.vue";

</script>

<style lang="scss" scoped></style>
