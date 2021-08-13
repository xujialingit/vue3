import { createApp } from 'vue'
import App from './App.vue'
import registerRouter from './plugins/router'
import registerStore from './plugins/store'
import registerElement from './plugins/element'

import "./plugins/styles/global.module.less"

const app = createApp(App);
registerRouter(app);
registerStore(app);
registerElement(app);
app.mount('#app')
