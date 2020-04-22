<template>
    <div :class="isMid ? 'card' : 'small-card'">
        <div class="content">
            <div class="folder-header y-center__between">
                <i class="el-icon-folder-add" @click="isNewFolder = true"></i>
                <i class="el-icon-search"></i>
            </div>
        </div>
        <div class="folder-container">
            <folder :folder-list="folderList"/>
        </div>
        <file-popover :x="position.x" :y="position.y" :is-folder="isClickFolder" @new="onNewFile"/>
    </div>
</template>

<script>
    import FilePopover from "./FilePopover"


    import Folder from "./Folder"
    export default {
        name: "Catalog",
        components: {Folder, FilePopover},
        props: {
            isMid: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                isDown: false,
                isNewFolder: false,
                isNewFile: false,
                isClickFolder: true,  // 是否为点击文件夹
                clickIndex: 0,
                newFolderName: '',
                newFileName: '',
                position: {
                    x: 0,
                    y: 0
                },
                folderList: [
                    {
                        folderName: 'common',
                        isFold: true,
                        childFolder: [
                            {
                                folderName: 'common',
                                isFold: true,
                                childFolder: [
                                    {
                                        folderName: 'common',
                                        isFold: true,
                                        childFolder: [],
                                        fileList: [
                                            'vue.js学习',
                                            '自定义组件学习'
                                        ]
                                    },
                                ],
                                fileList: [
                                    'vue.js学习',
                                    '自定义组件学习'
                                ]
                            },
                            {
                                folderName: 'common',
                                isFold: true,
                                childFolder: [],
                                fileList: [
                                    'hello',
                                    '自定义组件学习'
                                ]
                            },
                        ],
                        fileList: [
                            'vue.js学习',
                            '自定义组件学习'
                        ]
                    },
                    {
                        folderName: 'common',
                        isFold: true,
                        childFolder: [],
                        fileList: [
                            'hello',
                            '自定义组件学习'
                        ]
                    },
                ]
            }
        },
        methods: {
            showMenu(e, isClickFolder, index) {
                console.log(e)
                console.log(e.pageX)
                this.isClickFolder = isClickFolder
                this.clickIndex = index
                this.position.x = e.clientX + 30
                this.position.y = e.clientY - 30
                if (this.isClickFolder) {
                    this.clickIndex = index
                }
            },
            rename() {
                if (this.isNewFolder) {
                    this.folderList.push({
                        folderName: this.newFolderName,
                        isFold: true
                    })
                    this.clearNewInput()
                }
            },
            onNewFile() {
                this.folderList[this.clickIndex].isFold = false
                this.isNewFile = true
                this.autoFocus()
            },
            newFile() {
                this.folderList[this.clickIndex].fileList.push(this.newFileName)
            },
            clearNewInput() {
                this.isNewFolder = false
                this.isNewFile = false
                this.newFileName = ''
                this.newFolderName = ''
            },
            autoFocus() {
                this.$nextTick(() => {
                    this.$refs.input[0].focus()
                })
            }
        }
    }
</script>

<style lang="scss">
    .padding-left-folder {
        width: 92%;
        padding: 5px 4%;
    }

    .folder-hover {
        padding: 3px 4%;

        &:hover {
            background-color: #eee;
        }
    }

    .folder-header, .folder-body {
        @extend .padding-left-folder;
        background-color: #eee;

        i {
            font-size: 20px;
            color: #666;
        }
    }

    .input-name {
        input {
            padding: 5px !important;
            height: 28px !important;
            line-height: 28px !important;
            margin-left: 5px;
        }
    }

    .folder-container {
        font-size: 14px;

        .el-icon-folder-add {
            &:hover {
                color: #409EFF;
            }
        }

        .folder-header, .folder-body {
            @extend .padding-left-folder;
            background-color: #eee;

            i {
                font-size: 20px;
                color: #666;
            }
        }

        .folder-body {
            width: 100%;
            background-color: unset;
            padding: 5px 0;

            .folder-item {
                font-family: Arial, serif;

                .folder {
                    @extend .folder-hover;

                    i {
                        &:nth-child(1) {
                            font-size: 14px;
                            margin-right: 3px;
                            font-weight: bold;
                            color: #aaa;
                        }

                        &:nth-child(2) {
                            color: #FFCA28;
                        }
                    }

                    span {
                        margin-left: 5px;
                        color: #4a4a4a;
                        font-weight: lighter;
                        font-size: 14px;
                    }
                }

                .file {
                    @extend .folder-hover;

                    .y-center {
                        margin-left: 40px;

                        i {
                            color: #649EFD;
                            margin-right: 2px;
                        }
                    }
                }

            }


        }
    }

</style>

<style scoped lang="scss">

    .card {
        width: 98% !important;
    }

    .small-card,.card {
        margin-top: 20px;
        min-height: 250px;
        &:hover {
            background-color: unset !important;
        }
    }


</style>

