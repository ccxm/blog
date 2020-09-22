module.exports = {
    publicPath: './',    // 公共路径
    devServer: {
        proxy: {
            // proxy all requests starting with /api to jsonplaceholder
            '/md': {
                target: 'http://127.0.0.1/',   //代理接口
                changeOrigin: true,
            },
            '/static-blog': {
                target: 'http://127.0.0.1/',   //代理接口
                changeOrigin: true,
            }
        }
    }

}
