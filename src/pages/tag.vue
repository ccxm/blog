<template>
    <container :show-article="false" :is-tag-page="true"/>
</template>

<script>
    import Container from './../components/public/Container'

    export default {
        name: 'tag',
        components: {
            Container,
        }
    }
</script>
