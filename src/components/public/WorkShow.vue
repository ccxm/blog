<template>
    <div class="small-card">
        <div class="small-card-content">
            <span class="small-content-title">我的作品</span>
            <div v-for="item in 5" :key="item">
                <div class="work-item xy-center">
                    <div class="y-center">
                        <i class="fa fa-circle"></i>
                        <span>猫咪商城</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WorkShow"
    }
</script>

<style scoped lang="scss">
    @import "./../../assets/style/public";
    .work-item {
        height: 37px;

        .y-center {
            width: 92%;
            font-size: 16px;
            padding: 3px 4px;
            border-radius: 4px;

            &:hover {
                background-color: $default-background;
                box-shadow:0 0 5px #CCCCCC;
            }

            i {
                font-size: 12px;
                display: inline-block;
                padding-top: 3px;
                transform: scale(0.5);
            }

            span {
                margin-left: 5px;
                font-size: 15px;
            }
        }
    }
</style>
