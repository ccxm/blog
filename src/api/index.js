import { post, get, del, put, upload } from '@/plugins/modules/request'

export const login = params => post('user/login', params, {
    showTip: true,
    tipMsg: '登录成功'
})

export const getFolderList = () => get('folder/folder-list')

export const newFolder = params => post('folder/new-folder', params)

export const deleteFolder = params => del('folder/folder', params, {
    showTip: true,
    tipMsg: '删除文件夹成功，可通过回收站找回'
})

export const newFile = params => post('file/new-file', params)

export const deleteFile = params => del('file/file', params, {
    showTip: true,
    tipMsg: '删除文件成功，可通过回收站找回'
})

export const copyFolder = params => post('folder/copy', params, {
    showTip: true,
    tipMsg: '复制成功'
})

export const copyFile = params => post('file/copy', params, {
    showTip: true,
    tipMsg: '复制成功'
})

export const updateFie = params => put('file/file', params, {
    showTip: true,
    tipMsg: '更新成功'
})

export const renameFile = params => post('file/rename', params)

export const renameFolder = params => put('folder/rename', params, {
    showTip: true,
    tipMsg: '重命名成功'
})

export const getStatistics = () => get('/user/statistics')

export const getTagList = () =>  get('gather/tag-list')

export const addTag = params => post('gather/tag', params, {
    showTip: true,
    tipMsg: '新增标签成功'
})

export const getLastArticleList = () => get('file/last-articles')

export const getArticleList = () => get('file/articles')

export const updatePageView = params => put('/file/page-view', params)

export const getArticleDetail = params => get('/file/detail', params)

export const updateVisitorNum = params => put('/user/page-view', params)

export const getVisitorNum = params => get('/user/page-view', params)

export const uploadImage = (file, formData) => upload('/user/upload-image', {
    file,
    formData
}, {
    isShowLoading: true
})

export const updateArticleImage = params => post('/file/article-image', params)
