import {post} from './http'

export const login = params => post('user/login', params, {
    showTip: true,
    tipMsg: '登录成功'
})
