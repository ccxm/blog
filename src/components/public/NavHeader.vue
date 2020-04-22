<template>
    <div class="header x-center default-hover">
        <div class="y-center c-container">
            <el-row class="c-row y-center">
                <el-col :span="3" class="yx-center">
                    <span class="nav-title nav-item">丑小喵</span>
                </el-col>
                <el-col :span="10" class="y-center">
                    <span class="nav-item">首页</span>
                    <span class="nav-item">分类</span>
                    <span class="nav-item">标签</span>
                    <span class="nav-item">新建文档</span>
                    <span class="nav-item">关于</span>
                </el-col>
                <el-col :span="4" :offset="7" class="y-center">
                    <a class="nav-item nav-icon">
                        <i class="fab fa-github" aria-hidden="true"></i>
                    </a>
                    <a class="nav-item nav-icon">
                        <i class="fas fa-search" aria-hidden="true"></i>
                    </a>
                    <a class="nav-item nav-icon">
                        <i class="fas fa-moon" aria-hidden="true"></i>
                    </a>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavHeader"
    }
</script>

<style scoped lang="scss">
    @import "./../../assets/style/public";
    .header {
        background: $default-background;
        height: 60px;
        width: 100%;
        box-shadow: 0 4px 10px rgba(0,0,0,0.05), 0 0 1px rgba(0,0,0,0.1);
    }

    .c-row {
        width: 100%;
        span {
            font-size: 16px;
            color: #333;
            &:hover {
                color: #3273dc;
                cursor: pointer;
            }
        }

        .nav-item {
            padding: 5px 14px;
        }

        .nav-title {
            font-size: 20px;
            color: #3273DC;
            font-weight: 600;
            font-family: Monda;
        }

        .nav-icon {
            font-size: 18px;
        }
    }


</style>
