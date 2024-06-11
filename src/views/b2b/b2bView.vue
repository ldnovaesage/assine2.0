<template>
  <div class="w-screen bg-white flex items-center justify-around font-poppins">
    <LogoNavBar v-if="isDesktop" />
    <LogoNavBarMobile v-if="isMobile" />
    <RoofButton v-if="isDesktop" />
    <RoofButtonMobile v-if="isMobile" />
    <WantButton v-if="isDesktop" />
  </div>
  <div class="bg-slate-50">
    <HeroSectionMobile v-if="isMobile" />
    <HeroSectionDesktop v-if="isDesktop" />
  </div>
  <div class="bg-slate-50">
    <PlanTitle v-if="isDesktop" />
    <PlanTitleMobile v-if="isMobile" />
  </div>
  <div class="bg-slate-50">
    <PlanSection v-if="isDesktop" />
    <PlanSectionMobile v-if="isMobile" />
  </div>
  <div>
    <BenefitSection v-if="isDesktop" />
    <BenefitSectionMobile v-if="isMobile" />
  </div>
  <div>
    <SolutionSection v-if="isDesktop" />
    <SolutionSectionMobile v-if="isMobile" />
  </div>
  <div>
    <FormSection v-if="isDesktop" />
    <FormSectionMobile v-if="isMobile" />
  </div>
  <div>
    <FooterSection v-if="isDesktop" />
    <FooterSectionMobile v-if="isMobile" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import LogoNavBar from "@/components/b2b/navBar/LogoNavBar.vue";
import LogoNavBarMobile from "@/components/b2b/navBar/LogoNavBarMobile.vue";
import RoofButton from "@/components/b2b/navBar/RoofButton.vue";
import RoofButtonMobile from "@/components/b2b/navBar/RoofButtonMobile.vue";
import HeroSectionMobile from "@/components/b2b/heroSection/MobileLayout.vue";
import HeroSectionDesktop from "@/components/b2b/heroSection/DesktopLayout.vue";
import WantButton from "@/components/b2b/navBar/WantButton.vue";
import PlanTitle from "@/components/b2b/planTitle/PlanTitle.vue";
import PlanTitleMobile from "@/components/b2b/planTitle/PlanTitleMobile.vue";
import PlanSection from "@/components/b2b/planSection/PlanSection.vue";
import PlanSectionMobile from "@/components/b2b/planSection/PlanSectionMobile.vue";
import BenefitSection from "@/components/b2b/benefitSection/BenefitSection.vue";
import BenefitSectionMobile from "@/components/b2b/benefitSection/BenefitSectionMobile.vue";
import SolutionSection from "@/components/b2b/solutionSection/SolutionSection.vue";
import SolutionSectionMobile from "@/components/b2b/solutionSection/SolutionSectionMobile.vue";
import FormSection from "@/components/b2b/formSection/FormSection.vue";
import FormSectionMobile from "@/components/b2b/formSection/FormSectionMobile.vue";
import FooterSection from "@/components/b2b/footerSection/FooterSection.vue";
import FooterSectionMobile from "@/components/b2b/footerSection/FooterSectionMobile.vue";

const isMobile = ref(false);
const isDesktop = ref(false);

const updateResponsiveState = () => {
  const width = window.innerWidth;
  isMobile.value = width < 768;
  isDesktop.value = width >= 768;
};

onMounted(() => {
  updateResponsiveState();
  window.addEventListener("resize", updateResponsiveState);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateResponsiveState);
});
</script>

<style lang="scss" scoped></style>
