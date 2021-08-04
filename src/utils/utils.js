// 验证邮箱
export const testEmail = (email) => {
    const reg = /[\w]+(\.[\w]+)*@[\w]+(\.[\w])+/
    return reg.test(email)
}

// 验证密码
export const testPassword = (password) => {
    const reg = /^(\w){6,20}$/
    return reg.test(password)
}

// 验证验证码
export const testVerifyCode = (verifyCode) => {
    const reg = /^[0-9]{6}$/
    return reg.test(verifyCode)
}

// 保存token
export const saveToken = token => {
    localStorage.setItem('token', token)
}

// 删除token
export const deleteToken = () => {
    localStorage.removeItem('token')
}

// 保存token
export const getToken = () => {
    return localStorage.getItem('token')
}

// 节流
export function throttle(func, wait = 500) {
    let timer = null
    return function () {
        if (timer) {
            return
        }
        const that = this  // 保留函数的原来的调用者
        const args = arguments
        timer = setTimeout(() => {
            func.apply(that, args) // 调用函数
        }, wait)
    }
}

// 防抖
export function debounce(func, wait = 500) {
    let timer = null
    return function () {
        if (timer) {
            clearInterval(timer)
        }
        const that = this  // 保留函数的原来的调用者
        const args = arguments
        timer = setTimeout(() => {
            func.apply(that, args) // 调用函数
        }, wait)
    }
}

