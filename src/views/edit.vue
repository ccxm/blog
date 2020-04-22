<template>
    <div class="edit-container">
        <markdown-pro v-model="value" />
    </div>
</template>

<script>
    import MarkdownPro from 'vue-meditor'
    export default {
        name: "edit",
        components: {
            MarkdownPro
        },
        data() {
            return {
                value: ''
            }
        },
    }
</script>

<style scoped>
    .edit-container {
        width: 100%;
        height: 100%;
    }
</style>
