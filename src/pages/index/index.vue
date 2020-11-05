<template>
    <container />
</template>

<script>
    import Container from '../../components/public/Container'

    export default {
        name: 'index',
        components: {
            Container
        },
        data() {
            return {
                value: ''
            }
        },
    }
</script>
