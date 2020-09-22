<template>
    <div class="index-container">
        <nav-header/>
        <container :show-article="false" :show-archive="true"/>
        <nav-footer />
    </div>
</template>

<script>
    import NavHeader from "./../components/public/NavHeader"
    import Container from './../components/public/Container'
    import NavFooter from '../components/public/NavFooter'

    export default {
        name: 'archive',
        components: {
            NavFooter,
            Container,
            NavHeader,
        },
        data() {
            return {
                value: ''
            }
        },
        mounted() {

        }
    }
</script>

<style lang="scss">
    @import "./../assets/style/public";

    .index-container {
        background: $default-background;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
</style>
