module.exports = {
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
