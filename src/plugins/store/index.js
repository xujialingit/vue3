import { createStore } from 'vuex';
import moduleA from './modules/moduleA';
import storage from '../storage/local';

let token = storage.get("token") || "";

const store = createStore({
  state: () => ({
    count: 90,
    token: token,
  }),
  mutations: {
    setCount(state, count) {
      state.count = count
    }
  },
  actions: {},
  getters: {},
  modules: {
    moduleA: moduleA
  },
});



const registerStore = function (app) {
  app.use(store);
}

export default registerStore;