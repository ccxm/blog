<template>
    <container :show-article="false" :show-full-catalog="true" :is-sort-page="true"/>
</template>

<script>
    import Container from './../components/public/Container'

    export default {
        name: 'sort',
        components: {
            Container,
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
