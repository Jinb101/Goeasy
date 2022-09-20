const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: "./",
    devServer: {
        proxy: {
            '/api': {
                target: 'https://tts.tencentcloudapi.com',
                secure: false,
                pathRewrite: {
                    '^/api': '/api'
                }
            }
        }
    }
})
