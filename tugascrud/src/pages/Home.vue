<template>
    <div>
        <HomeComponent></HomeComponent>
        <CopyrightComponent></CopyrightComponent>
    </div>
</template>

<script>
import HomeComponent from '@/components/HomeComponent.vue';
import CopyrightComponent from '@/components/CopyrightComponent.vue'

export default {
    name : "HomePage",

    components : {
        HomeComponent,
        CopyrightComponent,
    },
}
</script>

<style>

</style>