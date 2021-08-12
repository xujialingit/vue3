import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

const registerElement = function (app) {
  app.use(ElementPlus);
}

export default registerElement;