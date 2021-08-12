import { createStore } from 'vuex';

const store = createStore();

const registerStore = function (app) {
  app.use(store);
}

export default registerStore;