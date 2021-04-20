<template>
    <div class="article card" @click="goToPreview">
        <div v-if="file.fileImage" class="article-bg-img"  :class="{'article-bg-img-preview': isPreview}">
          <img :src="IMAGE_BASE_URL + file.fileImage"/>
        </div>
        <div class="content">
            <div class="article-header y-center__between">
                <div>
                  <span>已置顶</span>
                  <span>{{file.createdAt | formatDate | beautifyTime}}</span>
                  <span>{{Math.ceil(value.length / readSpeed)}} 分钟 读完 (大约 {{value.length}} 个字)</span>
                </div>
              <el-upload
                  @click.stop.native
                  class="upload-demo"
                  :auto-upload="false"
                  :show-file-list="false"
                  :on-change="uploadImage"
                  :multiple="false">
                <a style="color: #409EFF;letter-spacing: 1px;font-size: 14px">上传背景图片</a>
<!--                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
              </el-upload>
            </div>
            <div class="article-title">
                <span>{{file.fileName}}</span>
            </div>
            <div class="article-body" :class="isPreview ? 'preview-article' : ''"
                 v-loading="loading" :element-loading-text="loadingText">
                <!--                <vue-markdown class="markdown" :source="value" />-->
                <!--                <markdown-preview class="markdown" :initialValue="value" @onCopy="onCopy" theme="oneDark"/>-->
                <le-preview v-if="value" class="markdown" :class="isPreview ? 'preview-markdown' : ''" ref="md-preview"
                            :is-md="true" :value="value" :hljs-css="hljsCss"></le-preview>
                <p class="markdown none-content xy-center" v-else>暂无内容，赶快来写一下吧~</p>
                <!--                <mavon-editor v-model="value"/>-->
                <!--                <article v-html="value" ></article>-->
                <!--                <markdown-pro v-model="value" />-->
            </div>
            <div class="article-footer y-center__between">
                <div>
                    <i class="far fa-eye"></i>
                    <span>{{file.pageView}}次浏览</span>
                </div>
                <div>
                    <i class="far fa-calendar-check"></i>
                    <span>最后修改：{{file.updatedAt | formatDate}}</span>
                </div>
            </div>
        </div>
        <!--        <markdown-pro v-model="value" theme="oneDark"/>-->
    </div>
</template>

<script>
    // import { MarkdownPreview } from 'vue-meditor'
    // import {MarkdownPro} from 'vue-meditor';
    // import {VueMarkdown} from 'vue-markdown'
    import axios from 'axios'
    import { FILE_BASE_URL, IMAGE_BASE_URL } from '@/config'
    import storage from '@utils/storage'
    import merge from 'webpack-merge'

    export default {
        name: 'Article',
        components: {
            // MarkdownPreview,
            // MarkdownPro,
            // VueMarkdown
        },
        props: {
            isPreview: {
                type: Boolean,
                default: false,
            },
            articleUrl: {
                type: String,
                default: 'DEFAULT',
            },
            fileUrl: {
                type: Object,
                default: () => {
                    return {
                        folderId: '',
                        fileId: '',
                        userId: '',
                    }
                },
            },
        },
        data() {
            return {
                IMAGE_BASE_URL,
                hljsCss: 'agate',
                loading: false,
                loadingText: '加载中...',
                userId: storage.get('userId'),
                file: {},
                readSpeed: 350,
                value: '',
                isEntry: true, // 是否是进入路由
            }
        },
        watch: {
            fileUrl() {
                this.getFile()
            },
            '$route'() {
              if(!this.isEntry) {
                this.getFileDetail(this.$route.query.id, true)
              }
            }
        },
        methods: {
            onCopy(code) {
                console.log(code)
            },
            goToPreview() {
                if (!this.isPreview) {
                    this.$router.push(`preview?id=${this.file.fileId}`)
                }
            },
            getFile(file) {
                this.loading = true
                console.log(this.userId)
                axios.get(`${FILE_BASE_URL}/${this.userId}/${file.folderId}/${file.fileId}.md`, {
                    headers: {
                        'Cache-Control': 'no-cache',
                    },
                }).then(res => {
                    this.value = res.data
                    console.log(this.value.length)
                    this.loading = false
                    this.setClickAsNewBlank()
                }).catch(err => {
                    console.log(err)
                })
            },
            updatePageView(file) {
                this.$api.updatePageView({fileId: file.fileId}).then(res => {
                    this.$set(file, 'pageView', res.pageView)
                })
            },
            getFileDetail(fileId, isGetContent = false) {
                this.$api.getArticleDetail({fileId: fileId}).then(res => {
                    this.file = res.detail
                    if (this.isPreview) {
                        this.updatePageView(this.file)
                    }
                    if (isGetContent) {
                        this.getFile(this.file)
                    }
                })
            },
            getArticleList() {
                this.$api.getLastArticleList().then(res => {
                    this.file = res.lastArticleList[0]
                    this.getFile(this.file)
                    this.$router.push({
                      query: merge(this.$route.query,{id: this.file.fileId})
                    })
                })
            },
            // 设置预览的a标签打开为新窗口
            setClickAsNewBlank() {
              this.$nextTick(() => {
                const parent = document.getElementsByClassName('preview-markdown')[0]
                console.log(parent)
                if (parent) {
                  const tagA = [...parent.getElementsByTagName('a')]
                  tagA.shift()  // 去除第一个元素，第一个是标题
                  tagA.forEach(item => {
                    item.setAttribute('target', '_blank')
                  })
                }
              })
            },
          // 上传图片
          uploadImage(file) {
              console.log(file)
            const isImage = file.raw.type.indexOf('image') === 0
            const isLt5M = file.raw.size / 1024 / 1024 < 5;
              if(!isImage) {
                this.$tips.error('上传背景图片必须为图片类型')
                return
              }
              if(!isLt5M) {
                this.$tips.error('上传背景图片必须小于5M')
                return
              }
              this.$api.uploadImage(file.raw, {
                img_type: 'bg'
              }).then(res => {
                this.$api.updateArticleImage({
                  fileImage: res.url,
                  fileId: this.file.fileId
                }).then(() => {
                  this.$set(this.file, 'fileImage', res.url)
                })
              })
          },
          // 监听localstorage的变化，实现页面之间的通讯
          listenLocalStorage() {
              window.addEventListener('storage', ev => {
                if (ev.key === 'updateFile') {
                  let fileInfo = localStorage.getItem('updateFile')
                  if (!fileInfo) {
                      return
                  }
                  fileInfo = JSON.parse(fileInfo)
                  if (fileInfo.fileId === this.file.fileId) {
                    this.getFile(this.file)
                  }
                }
              })
          }
        },
        mounted() {
            this.$bus.$on('selectedFile', (file) => {
                console.log(file)
                this.file = file
                this.getFile(file)
                this.getFileDetail(file.fileId)
                this.$router.push({
                  query: merge(this.$route.query,{id: file.fileId})
                })
            })
            if (this.$route.query.id) {
              this.getFileDetail(this.$route.query.id, true)
              this.isEntry = false
            } else {
              this.getArticleList()
            }
            this.listenLocalStorage()
        },
        destroyed() {
            this.$bus.$off('selectedFile')
            window.removeEventListener('storage')
        },
    }
</script>

<style scoped lang="scss">
    .article {
        width: 98%;
        /*height: 400px;*/
        font-size: 12px;

        .article-bg-img {
          width: 100%;
          height: 280px;
          overflow-y: hidden;
          border-top-left-radius: 3px;
          border-top-right-radius: 3px;

          img {
            width: 100%;
            border-top-left-radius: 3px;
            border-top-right-radius: 3px;
            object-fit: contain;
          }
        }

      .article-bg-img-preview {
        height: 400px;
      }
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
        border: 1.5px dashed #eee;
        border-radius: 3px;
        margin-top: 10px;

        .markdown {
            width: 100%;
            height: 250px;
            overflow-y: auto;
            padding: 5px;

            &::-webkit-scrollbar {
                display: none;
            }

            &:hover {
            }
        }

        .preview-markdown {
            height: auto !important;
        }

        .none-content {
            font-size: 16px;
            font-weight: 300;
            color: #bbb;
        }
    }

    .preview-article {
        border: none !important;
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
