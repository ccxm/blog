<template>
    <div class="article card">
        <div class="content">
            <div class="article-header">
                <span>已置顶</span>
                <span>7个月前</span>
                <span>23 分钟 读完 (大约 3445 个字)</span>
            </div>
            <div class="article-title">
                <span>博客源码分享</span>
            </div>
            <div class="article-body">
<!--                <vue-markdown class="markdown" :source="value" />-->
                <markdown-preview class="markdown" :initialValue="value" @onCopy="onCopy" theme="oneDark"/>
<!--                <mavon-editor v-model="value"/>-->
<!--                <article v-html="value" ></article>-->
<!--                <markdown-pro v-model="value" />-->
            </div>
            <div class="article-footer y-center__between">
                <div>
                    <i class="far fa-eye"></i>
                    <span>100次浏览</span>
                </div>
                <div>
                    <i class="far fa-calendar-check"></i>
                    <span>最后修改：2020-04-10</span>
                </div>
            </div>
        </div>
<!--        <markdown-pro v-model="value" theme="oneDark"/>-->
    </div>
</template>

<script>
    import { MarkdownPreview } from 'vue-meditor'
    // import {MarkdownPro} from 'vue-meditor';
    // import {VueMarkdown} from 'vue-markdown'
    export default {
        name: "Article",
        components: {
            MarkdownPreview,
            // MarkdownPro,
            // VueMarkdown
        },
        data() {
            return {
                value: 'test脚本改成jest\n' +
                    '\n' +
                    '- `babel.config.js`\n' +
                    '测试环境为node.js，不支持es6语法，要配置babel，将es6转成es5\n' +
                    '``` javascript\n' +
                    'module.exports = {\n' +
                    '  presets: [\n' +
                    '    [\n' +
                    '      "@babel/preset-env",\n' +
                    '      {\n' +
                    '        targets: {\n' +
                    '          node: "current"\n' +
                    '        }\n' +
                    '      }\n' +
                    '    ]\n' +
                    '  ],\n' +
                    '  plugins: ["transform-es2015-modules-commonjs"]\n' +
                    '};\n' +
                    '```'
            }
        },
        methods: {
            onCopy(code) {
                console.log(code)
            }
        }
    }
</script>

<style lang="scss">
    @import "./../../assets/style/public.scss";
    /*.markdown-preview {*/
    /*    width: 100% !important;*/
    /*    height: 300px !important;*/
    /*    background: #fff;*/
    /*}*/
</style>

<style scoped lang="scss">
    @import "./../../assets/style/public.scss";
    .article {
        width: 98%;
        /*height: 400px;*/
        font-size: 12px;
        background: #fff;
    }

    .content {
        padding: 21px;
    }

    .article-title {
        font-size: 28px;
        color: #242424;
        font-weight: bolder;

        &:hover {
            color: #3273dc;
        }
    }

    .article-header {
        font-size: 12px;
        color: #7a7a7a;
        span {
            margin-right: 10px;
        }
    }

    .article-body {
        background: #fff;
        border: 1.5px dashed #eee;
        border-radius: 3px;
        .markdown {
            width: 100%;
            height: 250px;
        }
    }

    .article-footer {
        font-size: 12px;
        color: #7a7a7a;
        margin-top: 15px;
        i {
            margin-right: 3px;
        }

        span {
            font-weight: lighter;
        }
    }
</style>
