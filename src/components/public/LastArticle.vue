<template>
    <div class="small-card">
        <div class="small-card-content">
            <span class="small-content-title">最新文章</span>
            <div v-for="item in 4" :key="item">
                <div class="article-item">
                    <span>2020-04-10</span>
                    <span>mysql最大长连接问题mysql最大长连接问题</span>
                    <div class="y-center">
                        <i class="fas fa-folder-open has-text-grey"></i>
                        <span>数据库/mysql</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LastArticle"
    }
</script>

<style scoped lang="scss">
    .small-card {
        margin-top: 20px;
    }

    .small-content-title {
        display: block;
        margin-bottom: -10px !important;
    }
    .article-item {
        margin-top: 20px;
        span {
            color: #7a7a7a;
            font-size: 12px;
            display: block;

            &:nth-child(2) {
                color: #2a2a2a;
                font-size: 15px;
                font-weight: bold;
            }
        }

        .y-center {
            margin-top: 3px;
            color: #7a7a7a;
            font-size: 14px;
            span {
                margin-left: 4px;
                color: #7a7a7a;
                font-size: 12px;
                display: inline;
                font-weight: lighter;
                letter-spacing: 1px;
            }
        }
    }
</style>
