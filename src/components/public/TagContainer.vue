<template>
    <div class="small-card">
        <div class="small-card-content">
            <span class="small-content-title">标签</span>
            <div class="tag-content">
                <tag class="tag-item"/>
                <tag class="tag-item"/>
                <tag class="tag-item"/>
                <tag class="tag-item"/>
                <tag class="tag-item"/>
                <tag class="tag-item"/>
                <tag class="tag-item"/>
                <tag class="tag-item"/>
                <tag class="tag-item"/>
                <tag class="tag-item"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Tag from "./Tag"
    export default {
        name: "TagContainer",
        components: {
            Tag
        }
    }
</script>

<style scoped lang="scss">
    .small-card {
        margin-top: 20px;
    }


    .tag-content {
        display: flex;
        flex-wrap: wrap;
    }

</style>
