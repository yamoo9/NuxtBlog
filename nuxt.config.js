const pkg = require('./package')

const src = 'client'

module.exports = {
  mode: 'universal',

  env: {
    baseUrl: process.env.BASE_URL || 'https://nuxt-blog-y9.firebaseio.com'
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'pageNotFound',
        path: '*',
        component: resolve(__dirname, src + '/pages/404.vue')
      })
    }
  },

  transition: {
    name: 'fade',
    mode: 'out-in',
    beforeEnter(el) {
      console.log('페이지 진입', el)
    }
  },

  layoutTransition: {
    name: 'layout',
    mode: 'out-in'
  },

  srcDir: src,

  /*
  ** Headers of the page
  */
  head: {
    // title: 'NUXT BLOG',
    titleTemplate: '%s - NUXT BLOG',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: '//fonts.googleapis.com/css?family=Noto+Sans+KR'
      },
      {
        rel: 'stylesheet',
        href: '//fonts.googleapis.com/css?family=Changa:200'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js 프레임워크를 사용해 제작된 블로그 서비스 입니다.'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#d43c6d', height: '6px' },
  // loading: '~/components/UI/Loading.vue',

  /*
  ** Global CSS
  */
  css: ['~assets/styles/main.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~plugins/GlobalComponents.js', '~plugins/Notifications.js'],

  /*
  ** Nuxt.js modules
  */
  modules: [],

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        'postcss-preset-env': {
          autoprefixer: { grid: true }
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
