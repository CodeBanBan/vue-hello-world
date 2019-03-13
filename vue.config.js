module.exports = {
  chainWebpack: config => {
    config.module
      .rule('i18n')
      .resourceQuery(/\bblockType=i18n\b/)
      .type('javascript/auto')
      .use('i18n')
      .loader('@kazupon/vue-i18n-loader')
      .end()
  }
}
