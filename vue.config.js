module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/glassdoor/'
    : '/',
  transpileDependencies: ["vuetify"],
  chainWebpack: config => {
    // file loader
    config.module
      .rule('file')
      .test(/\.(pdf)$/i)
      .use('file-loader')
        .loader('file-loader')
        .end()
  }
};
