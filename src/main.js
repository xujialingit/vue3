import { createApp } from 'vue'
import App from './App.vue'
import api from './plugins/apis/index'

import registerRouter from './plugins/router'
import registerStore from './plugins/store'
import registerElement from './plugins/element'

import "./plugins/styles/global.module.less"

const app = createApp(App);
app.config.globalProperties.$api = api;
registerRouter(app);
registerStore(app);
registerElement(app);
app.mount('#app')
