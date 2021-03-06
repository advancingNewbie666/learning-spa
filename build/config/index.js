const { getPath } = require('./utils');
const public = require('./public');
module.exports = {
    dev: {
        path: getPath(public.outputPath.dev),////通过HtmlWebpackPlugin插件生成的html文件存放在这个目录下面
        chunkFilename: '[name].chunk.js',
        filename: 'js/[name].js',
        publicPath: '/learning-spa/',
        port: 9088,
        host: '127.0.0.1',
        devtool: 'cheap-module-eval-source-map',
        cssSourceMap: true,
        cacheBusting: true,//一个配合devtool的配置，当给文件名插入新的hash导致清楚缓存时是否生成souce maps，默认在开发环境下为true
        proxyTable: {
            '/cq-ocms': {
                target: 'https://www.cuniq.com',
                changeOrigin: true,
                secure: false,
                //pathRewrite: { '^/cq-ocms' : '/' }
            },
        },
        autoOpenBrowser: true,
        poll: false,
    },
    prod: {
        path: getPath(public.outputPath.prod),
        chunkFilename: '[name].[chunkhash:8].min.js',
        filename: 'js/[name][chunkhash:8].js',
        publicPath: '/learning-spa/',
        devtool: '#source-map',
        productionSourceMap: true,
        productionGzip: true,
        productionGzipExtensions: ['js', 'css'],
        bundleAnalyzerReport: true,
    },
    build: {
        useEslint: true,//看不到效果
    }
}