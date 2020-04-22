<template>
    <div class="c-container container-table">
        <el-row>
            <el-col :span="6" :md="7" :lg="6" class="yx-center">
                <user-info />
                <catalog />
            </el-col>
            <el-col :span="12" :md="17" :lg="12" class="yx-center">
                <article-body />
                <catalog :is-mid="true"/>
            </el-col>
            <el-col :span="6" class="yx-center hidden-md-and-down">
                <work-show />
                <last-article />
                <tag-container />
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import UserInfo from "./UserInfo"
    import ArticleBody from "./ArticleBody"
    import Catalog from "./Catalog"
    import TagContainer from "./TagContainer"
    import LastArticle from "./LastArticle"
    import WorkShow from "./WorkShow"
    export default {
        name: "Container",
        components: {
            WorkShow,
            LastArticle,
            TagContainer,
            Catalog,
            UserInfo,
            ArticleBody
        }
    }
</script>

<style scoped lang="scss">
    .container-table {
        /*border: 1px solid black;*/
        width: 80%;
        margin-top: 20px;
    }
</style>
