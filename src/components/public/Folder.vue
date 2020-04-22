<template>
    <div class="folder-container">
        <div class="folder-body">
            <div class="folder-item y-flex" v-for="(item, index) in folderList" :key="index">
                <div class="folder" @click.right.prevent="showMenu($event, true, index)"
                     @click.left.prevent="item.isFold = !item.isFold">
                    <i :class="item.isFold ? 'el-icon-arrow-right' : 'el-icon-arrow-down'"></i>
                    <i :class="item.isFold ? 'fa fa-folder' : 'fa fa-folder-open'"></i>
                    <span>{{item.folderName}}</span>
                </div>
                <div v-if="!item.isFold">
                    <div class="file" v-for="(file, fileIndex) in item.fileList" :key="fileIndex"
                         @contextmenu.prevent="showMenu($event,false)">
                        <div class="y-center">
                            <i class="iconfont icon-a_markdown"></i>
                            <span>{{file}}</span>
                        </div>
                    </div>
                    <div class="file" v-if="isNewFile && (clickIndex === index)">
                        <div class="y-center">
                            <i class="iconfont icon-a_markdown"></i>
                            <el-input ref="input" class="input-name" v-model="newFileName" maxlength="15" show-word-limit
                                      :autofocus="true" @blur="clearNewInput" @keyup.enter.native="newFile"/>
                        </div>
                    </div>
                </div>
                <div v-if="item.childFolder.length" class="child-folder">
                    <folder :folder-list="item.childFolder"/>
                </div>
            </div>
            <div class="folder-item y-flex" v-if="isNewFolder">
                <div class="folder xy-center new-folder">
                    <i class="el-icon-arrow-right"></i>
                    <i class="fa fa-folder"></i>
                    <el-input ref="input" class="input-name" v-model="newFolderName" maxlength="10" show-word-limit
                              :autofocus="true" @blur="clearNewInput" @keyup.enter.native="rename"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Folder",
        components: {},
        props: {
            isMid: {
                type: Boolean,
                default: false
            },
            folderItem: Array
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
                }
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

<style scoped lang="scss">

    .child-folder {
        padding-left: 40px;
    }

</style>
