<script>
import NavBar from "@/components/_fragments/navBar/navBar.vue"
import Content from "@/components/sectionOne/firstSectionContent.vue"

export default {
    name: 'FirstSection',
    components: {
        NavBar,
        Content
    }
}
</script>
<template>
    <div>
        <NavBar/>
        <Content/>
    </div>
</template>
<style lang="scss">
    
</style>