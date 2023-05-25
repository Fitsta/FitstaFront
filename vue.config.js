// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   pwa: {
//     name: 'Firsta',
//     themeColor : '#a99df0',
//   },
//   transpileDependencies: true,
//   devServer: {
//     proxy: {
//       '/api': {	
//         // target: 'https://minsung.site', // 프록시를 설정할 도메인
//         target: 'http://localhost:8080', // 프록시를 설정할 도메인
//         changeOrigin: true,
//       }, 
//     },
//   },
// })


const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy : 'http://3.38.88.28/:8080'
  }
})


// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   devServer: {
//     proxy : 'https://minsung.site'
//   }
// })