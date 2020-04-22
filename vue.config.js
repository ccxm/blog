module.exports = {
    publicPath: './',    // 公共路径
    devServer: {
        proxy: {
            // proxy all requests starting with /api to jsonplaceholder
            '/': {
                target: 'http://localhost/',   //代理接口
                changeOrigin: true,
            }
        }
    }

}
