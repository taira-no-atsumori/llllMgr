const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  outputDir: 'docs',
  assetsDir: './',
  publicPath: '/llllMgr/',
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})

/* module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/llllMgr/' : '/',

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
} */
