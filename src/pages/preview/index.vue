<template>
    <container :is-preview="true"/>
</template>

<script>
    import Container from '../../components/public/Container'

    export default {
        name: 'preview',
        components: {
            Container,
        },
        data() {
            return {
                value: ''
            }
        },
    }
</script>
