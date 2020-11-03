import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index'
import edit from "./views/edit"
import preview from "./views/preview"
import archive from './views/archive'
import tag from './views/tag'
import sort from './views/sort'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/edit',
            name: 'edit',
            component: edit
        },
        {
            path: '/preview',
            name: 'preview',
            component: preview
        },
        {
            path: '/archive',
            name: 'archive',
            component: archive
        },
        {
            path: '/tag',
            name: 'tag',
            component: tag
        },
        {
            path: '/sort',
            name: 'sort',
            component: sort
        },
    ],
})

