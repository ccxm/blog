<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
    import storage from './js/storage'

    export default {
        name: 'App',
        mounted() {
            this.$api.updateVisitorNum({userId: storage.get('userId')})
        }
    }
</script>

<style lang="scss">
    @import "assets/style/public";

    #app {
        width: 100%;
        background: $default-background;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
