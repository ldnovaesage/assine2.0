<script>
// @ is an alias to /src
import FirstSection from "@/components/sectionOne/firstSection.vue"
import SecondSection from "@/components/sectionTwo/secondSection.vue"
import ThirdSection from "@/components/sectionThree/thirdSection.vue"
import FourSection from "@/components/sectionFour/fourSection.vue"

export default {
  name: 'HomeView',
  components: {
    FirstSection,
    SecondSection,
    ThirdSection,
    FourSection
  }
}
</script>

<template>
  <div>
    <FirstSection/>
  </div>
  <div>
    <SecondSection/>
  </div>
  <div>
    <ThirdSection/>
  </div>
  <div>
    <FourSection/>
  </div>
</template>
