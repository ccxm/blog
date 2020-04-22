import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index'
import edit from "./views/edit"

Vue.use(Router)

export default new Router({
    mode: 'hash',
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
        }
    ]
})
