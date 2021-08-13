import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const { resolve } = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    //配置命名空间
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ],
  },

  //css配置
  css: {
    preprocessorOptions: {
      //配置全局公用样式
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve('src/plugins/styles/global.module.less')}";`,
        },
        javascriptEnabled: true,
      }
    }
  },

  //配置server及代理
  server: {
    open: true,
    port: 8080,
    proxy: {
      //配置代理
    }
  }
})
