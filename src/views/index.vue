<template>
    <div class="index-container">
        <nav-header/>
        <container />
    </div>
</template>

<script>
    import NavHeader from "./../components/public/NavHeader"
    import Container from './../components/public/Container'

    export default {
        name: 'index',
        components: {
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
    }
</style>
