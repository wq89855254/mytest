module.exports = {
    publicPath:process.env.NODE_ENV==='development'?'/':'./',
    devServer: {
      proxy: {
        '/api': {
          target: 'http://172.17.123.138:8180/boiler/info',
          pathRewrite: {
            '/api': '',
          }
        }
      }
    },
    chainWebpack: config => {
      config
        .plugin('html')
        .tap(args => {
          args[0].title = '测试项目'
          return args
        })
    },
    lintOnSave: false,// 设置是否在开发环境下每次保存代码时都启用 eslint验证
   
  }