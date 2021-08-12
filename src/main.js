import { createApp } from 'vue'
import App from './App.vue'
import registerRouter from './plugins/router'
import registerStore from './plugins/store'
import registerElement from './plugins/element'

const app = createApp(App);
registerRouter(app);
registerStore(app);
registerElement(app);
app.mount('#app')
