
module.exports = {  
    integrity: false, // 构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性, 默认false
    productionSourceMap: false, // 生产环境 sourceMap
    publicPath:"/", //根路径  vue3.3之后baseUrl被publicPath代替了baseUrl无效了
    outputDir: "dist", //配置打包后的文件目录
    assetsDir: "assets", //配置静态目录访问文件（js,image,css）
    lintOnSave: false, //配置eslint
    devServer: {
        open: false, //配置运行项目是否自动开启浏览器
        host: "localhost", //0.0.0.0我配置的是真机测试根据个人需要可以配置成localhost
        port: 8080, //端口号
        https: false, //配置true的话是https安全通道但是如果没有后注册SSL会有警告
        //配置跨域
        proxy: {
            [process.env.BASE_API]: {
                target: [process.env.BASE_API],
                ws: true, //配置ws跨域
                changOrigin: true, //配置跨域
                pathRewrite: {
                    ['^' + process.env.BASE_API]:""
                }
            }
        }
    }

};