const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pwa: {
    name: 'Firsta',
    themeColor : '#a99df0',
  },
  transpileDependencies: true,
  devServer: {
    proxy : 'https://minsung.site'
  }
})
